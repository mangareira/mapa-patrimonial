import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";
import { sign } from "hono/jwt";
import { HTTPException } from "hono/http-exception";
import { setSignedCookie } from "hono/cookie";
import { middleware } from "./middleware";

const app = new Hono<{Variables: {admin:{ id: string}}}>()
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        email: z.string().email(),
        password: z.string().nonempty().min(8)
      })
    ),
    async (c) => {
      const value = c.req.valid("json")

      const hashed = await hash(value.password, 10)

      const result = prisma.admin.create({
        data: {
          email: value.email,
          password: hashed
        }
      })

      return c.json((await result).id)
    }
  )
  .post(
    "/login",
    zValidator(
      "json",
      z.object({
        email: z.string().email(),
        password: z.string().nonempty().min(8)
      })
    ),
    async (c) => {
      const res = c.req.valid("json")

      const user = await prisma.admin.findUnique({
        where: {
          email: res.email
        }
      })

      if (!user) throw new HTTPException(404, {
        message: "Admin não encontrado"
      })

      const verify = await compare(res.password, user.password)

      if (!verify) throw new HTTPException(401, {
        message: "Senha incorreta"
      })

      const token = await sign({sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24}, process.env.SECRET_KEY!)

      const refresh_token = await sign({sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7}, process.env.SECRET_KEY!)

      await setSignedCookie(c, 'access-token', token,process.env.SECRET_KEY! ,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 60 * 24 
      })

      await setSignedCookie(c, 'refresh-token', refresh_token,process.env.SECRET_KEY! , {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })

      return c.json({ id: user.id })
    }
  )
  .post(
    "/refresh-token",
    middleware("refresh-token"),
    async (c) => {
      const user = c.get("admin")

      const token = await sign({sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24}, process.env.SECRET_KEY!)

      const refresh_token = await sign({sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7}, process.env.SECRET_KEY!)

      await setSignedCookie(c, 'access-token', token,process.env.SECRET_KEY! ,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 60 * 24 
      })

      await setSignedCookie(c, 'refresh-token', refresh_token,process.env.SECRET_KEY! , {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })

      return c.json({ id: user.id })
    }
  )
  .get(
    "/me",
    middleware("access-token"),
    async (c) => {
      const admin = c.get("admin");
      return c.json({ id: admin.id });
    }
  )

export default app
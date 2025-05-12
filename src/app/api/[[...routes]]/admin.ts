import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken"

const app = new Hono()
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

      if (!user) {
        return c.json({ error: "Admin não encontrado" }, 404)
      }

      const verify = await compare(res.password, user.password)

      if (!verify) {
        return c.json({ error: "Senha errada" }, 401)
      }

      const token = sign({email: user.email}, process.env.SECRET_KEY!, {
        algorithm: "HS256",
        expiresIn: "1d",
        subject: user.id
      })

      const refresh_token = sign({email: user.email}, process.env.SECRET_KEY!, {
        algorithm: "HS256",
        expiresIn: "7d",
        subject: user.id
      }) 

      return c.json({
        token,
        refresh_token,
      })
    }
  )

export default app
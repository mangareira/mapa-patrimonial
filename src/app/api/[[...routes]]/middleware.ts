import { Context, Next } from "hono"
import { HTTPException } from "hono/http-exception"
import { verify } from "hono/jwt"
import { getSignedCookie } from "hono/cookie"
import prisma from "@/lib/prisma"

export const middleware = (typeToken: "access-token" | "refresh-token") => {
  return async (c: Context, next: Next) => {
    const token = await getSignedCookie(c, process.env.SECRET_KEY!, typeToken)
    
    if (!token) {
      throw new HTTPException(401, { message: 'Acesso não autorizado. Faça login primeiro.' })
    }

    try {
      const decoded = await verify(token, process.env.SECRET_KEY!) as {sub: string}
      
      const admin = await prisma.admin.findUnique({
        where: { id: decoded.sub },
        select: {
          id: true
        }
      })

      if (!admin) {
        throw new HTTPException(404, { message: 'Administrador não encontrado' })
      }

      c.set('admin', admin)
      
      await next()
      
    } catch (error) {
      console.error('Erro na autenticação:', error)
      
      const message = error instanceof HTTPException 
        ? error.message 
        : 'Token inválido ou sessão expirada'
      
      throw new HTTPException(401, { message })
    }
  }
}
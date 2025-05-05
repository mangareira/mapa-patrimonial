import prisma from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
  .post(
    "/", 
    zValidator(
      "json", 
      z.object({
        name: z.string({
          message: "Nome é obrigatorio"
        }),
        description: z.string({
          message: "Descrição é obrigatoria"
        }).max(300),
        location: z.object({
          lat: z.number(),
          lng: z.number()
        }, {
          message: "localização obrigatoria"
        }),
        photos: z.array(
          z.object({
            url: z.string({
              message: "fotos são obrigatorias"
            }).url({
              message: "Tem que ser uma url valida"
            })
          })
        ),
        instructions: z.string({
          message: "Instruções é obrigatoria"
        }),
        visitHour: z.string({
          message: "Horario de visita é obrigatoria"
        }),
        weekend: z.enum(["yes", "no"], {
          message: "Diga se atende no final de semana"
        })
      })
    ), 
    async (c) => {
      const values = c.req.valid("json")
      
      const result = await prisma.locals.create({
        data: {
          name: values.name,
          description: values.description,
          location: {
            create: {
              lat: values.location.lat,
              lng: values.location.lng
            }
          },
          photos: {
            createMany: {
              data: values.photos
            }
          },
          instructions: values.instructions,
          visitHour: values.visitHour,
          weekend: values.weekend
        }
      })

      return c.json(result)
    }
  )
  .get(
    "/",
    async (c) => {
      const result =  await prisma.locals.findMany({
        select: {
          name: true,
          location: {
            omit: {
              id: true
            }
          },
        }
      })

      return c.json(result)
    }
  )

export default app
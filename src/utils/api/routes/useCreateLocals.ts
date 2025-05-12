import type { InferRequestType, InferResponseType } from "hono"
import { client } from "../hono"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

type ResponseType = InferResponseType<typeof client.api.locals.$post>
type RequestType = InferRequestType<typeof client.api.locals.$post>["json"]

export const useCreateLocals = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const res = await client.api.locals.$post({ json }, {
        init: {
          credentials: "include"
        }
      })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["locals"] })
      toast.success("Patrimonio criado com sucesso")
    },
    onError: () => {
      toast.error("Erro ao criar o pratrimonio")
    }
  })

  return mutation
}
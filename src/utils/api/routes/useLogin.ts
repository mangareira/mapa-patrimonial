import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "../hono"
import { toast } from "sonner"
import { InferRequestType, InferResponseType } from "hono"

type ResponseType = InferResponseType<typeof client.api.admin.login.$post>
type RequestType = InferRequestType<typeof client.api.admin.login.$post>["json"]

export const useLogin = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const res = await client.api.admin.login.$post({ json })
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin"] })
      toast.success("Login feito com sucesso")
    },
    onError: () => {
      toast.error("Erro ao logar como administrador")
    }
  })

  return mutation
}
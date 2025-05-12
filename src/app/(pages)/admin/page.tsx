"use client"

import { cn } from "@/lib/utils";
import { useLogin } from "@/utils/api/routes/useLogin";
import { LoginProps } from "@/utils/interfaces/login-props";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter()

  const { mutate, isPending } = useLogin()
  const {register, handleSubmit, formState: { errors }} = useForm<LoginProps>()

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/")
      }
    })
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg shadow-md p-8 outline-1 outline-white/20">
        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Login
        </h1>
        <form className="space-y-6 text-white" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none`}
              placeholder="seu@email.com"
              {...register("email", {required: "O Email é obrigatório"})}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none`}
              {...register("password", {required: "A Senha é obrigatório"})}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <button
            type="submit"
            className={cn(
              "w-full py-2 px-4 rounded-lg font-semibold flex justify-center",
              isPending ? 
                "bg-blue-400 cursor-not-allowed":
                "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {isPending ? <Loader2 className="animate-spin" />: "Entrar"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/admin/forgot-password" className="text-white/80 hover:underline text-sm">
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </div>
  )
}

"use client"
import { CgClose } from "react-icons/cg";
import Button from "../Button";
import RouteToDestination from "../RouteToDestination/RouteToDestination";
import useInfo from "@/utils/hooks/useInfo";
import clsx from "clsx";
import {FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import type { FormProps } from "@/utils/interfaces/form-props";
import InputField from "../InputField/InputField";
import InputPhotos from "../InputPhotos/InputPhotos";
import { useCreateLocals } from "@/utils/api/routes/useCreateLocals";

export default function MapCreate() {
  const {isOpenCreate , onClose} = useInfo()
  const { mutate } = useCreateLocals()

  const methods = useForm<FormProps>({
    defaultValues: {
      location: { lat: -5.505439, lng: -45.261990 }
    }
  })

  const {register, handleSubmit, formState: {errors}, reset, setValue} = methods

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    mutate({...data, weekend: "yes"}, {
      onSuccess: () => {
        onClose("select")
        reset()
      }
    })
  } 

  return (
    <div className={clsx(
      "w-[580px] h-full fixed right-0 top-0 bg-black z-20 overflow-y-auto shadow-xl transition-transform duration-500 ease-in-out",
      isOpenCreate  ? "translate-x-0" : "translate-x-full"
    )}>
      <Button className=" absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-[#5CE4E4] rounded-md text-white hover:bg-[#039FAA] cursor-pointer" onClick={() =>{onClose("select"); reset()}} >
        <CgClose size={20}/>
      </Button>
      <FormProvider {...methods}>
        <form className="py-7 px-10 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <h1 className="text-[#5CE4E4] font-bold text-[30px]">Dados</h1>
          </div>
          <div className="border-[1px] border-[#D3E2E5] my-10"/>
          <RouteToDestination 
            position={{ lat: -5.505439, lng: -45.261990}}
            text="Clique no mapa para adicionar a localização" 
            type="select" 
            className="mb-10"
            onSelect={(position) => setValue('location', position, { shouldValidate: true })}
          />
          <InputField
            label="Nome" 
            type="text" 
            error={errors.name?.message}
            {...register("name", { required: "Nome é obrigatório" })}
          />
          <InputField
            label="Descrição" 
            as="textarea"
            error={errors.description?.message}
            observation="Máximo de 300 caracteres"
            className="h-24"
            {...register("description", { required: "Descrição é obrigatório" })}
          />
          <InputPhotos 
            label="Fotos"
          /> 
          <div className="flex flex-col">
            <h1 className="text-[#5CE4E4] font-bold text-[30px]">Visitação</h1>
          </div>
          <div className="border-[1px] border-[#D3E2E5] mb-10"/>
          <InputField
            label="Instruções"
            as="textarea" 
            error={errors.instructions?.message}
            className="h-24"
            {...register("instructions", { required: "Instruções é obrigatório" })}
          />
            <InputField
            label="Horários das visitas" 
            error={errors.visitHour?.message}
            {...register("visitHour", { required: "Horário é obrigatório" })}
          />
          <Button 
            type="submit" 
            className="bg-[#5CE4E4] h-16 rounded-[20px] hover:bg-[#039FAA] text-white disabled:bg-[#039faa54] not-disabled:cursor-pointer" 
            disable={false}
          >
            Confirmar
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

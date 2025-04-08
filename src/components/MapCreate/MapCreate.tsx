"use client"
import { CgClose } from "react-icons/cg";
import Button from "../Button";
import Card from "../Card/Card";
import RouteToDestination from "../RouteToDestination/RouteToDestination";
import { BsClock, BsExclamationCircle } from "react-icons/bs";
import useInfo from "@/utils/hooks/useInfo";
import clsx from "clsx";

export default function MapCreate() {
  const {isOpenCreate , onClose} = useInfo()


  return (
    <div className={clsx(
      "w-[580px] h-full fixed right-0 top-0 bg-white z-20 overflow-y-auto shadow-xl transition-transform duration-500 ease-in-out",
      isOpenCreate  ? "translate-x-0" : "translate-x-full"
    )}>
      <Button className=" absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-blue-400 rounded-md text-white " onClick={() => onClose("select")} >
        <CgClose size={20}/>
      </Button>
      <div className="py-7 px-10 flex flex-col ">
          <div className="flex flex-col mb-10">
            <h1 className="text-[#4D6F80] font-bold text-4xl mb-5">Chacoreira do dede</h1>
            <p className="text-[#5C8599] font-semibold text-[18px]">acesso para toda familia de todos os lugares</p>
          </div>
          <RouteToDestination 
            text="Clique no mapa para adicionar a localização" 
            type="select" 
          />
          <div className="border-[1px] border-[#D3E2E5] my-14"/>
          <div className="">
            <div className="flex flex-col mb-10">
              <h1 className="text-[#4D6F80] font-bold text-2xl mb-3">Informações da visita</h1>
              <p className="text-[#5C8599] font-semibold text-[18px]">Venha como se sentir a vontade e traga muito amor e paciência para dar.</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <Card
                Icon={BsClock}
                className="border border-[#B3DAE2] bg-linear-to-br from-[#E6F7FB] to-white"
                iconClassName="text-[#15B6D6]"
                title="Horário de visitas"
                subTitle="Das 18h até 8h"
                titleClassName="text-[#5C8599]"
              />
              <Card
                Icon={BsExclamationCircle}
                className="border border-[#A1E9C5] bg-linear-to-br from-[#E6F7FB] to-white"
                iconClassName="text-[#39CC83]"
                title="Horário de visitas"
                subTitle="Das 18h até 8h"
                titleClassName="text-[#37C77F]"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

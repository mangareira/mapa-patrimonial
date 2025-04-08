"use client"
import { CgClose } from "react-icons/cg";
import Button from "../Button";
import Card from "../Card/Card";
import RouteToDestination from "../RouteToDestination/RouteToDestination";
import { BsClock, BsExclamationCircle } from "react-icons/bs";
import { useState } from "react";
import useInfo from "@/utils/hooks/useInfo";
import clsx from "clsx";

export default function MapData() {
  const {isOpenView, onClose} = useInfo()

  const imagesMap = [
    "https://blog.123milhas.com/wp-content/uploads/2023/08/lugares-para-conhecer-o-patrimonio-historico-e-cultural-igreja-de-ouro-preto-conexao123.jpg",
    "https://blog.123milhas.com/wp-content/uploads/2023/08/lugares-para-conhecer-o-patrimonio-historico-e-cultural-igreja-de-ouro-preto-conexao123.jpg",
    "https://blog.123milhas.com/wp-content/uploads/2023/08/lugares-para-conhecer-o-patrimonio-historico-e-cultural-igreja-de-ouro-preto-conexao123.jpg",
    "https://blog.123milhas.com/wp-content/uploads/2023/08/lugares-para-conhecer-o-patrimonio-historico-e-cultural-igreja-de-ouro-preto-conexao123.jpg",
    "https://blog.123milhas.com/wp-content/uploads/2023/08/lugares-para-conhecer-o-patrimonio-historico-e-cultural-igreja-de-ouro-preto-conexao123.jpg",
    "https://images.contentstack.io/v3/assets/blt312bfd9a3caf2bfc/blt66f1f1c965805781/6633d9be693c2901708b1fc6/Capa_Blog_-_29.04-02.jpg?auto=webp&format=pjpg&quality=80&width=1920&height=1080&fit=crop"
  ]

  const [mainImage, setMainImage] = useState(imagesMap[0]);

  return (
    <div  className={clsx(
      "w-[580px] h-full absolute bg-white z-20 overflow-y-auto shadow-xl transition-transform duration-500 ease-in-out",
      isOpenView ? "translate-x-0" : "-translate-x-full pointer-events-none"
    )}>
      <div
        className="w-full h-80 bg-cover bg-center relative transition-all duration-500"
        style={{
          backgroundImage: `url(${mainImage})`
        }}
      >
        <Button className=" absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white rounded-md text-blue-500 hover:text-white" onClick={() => onClose("view")} >
          <CgClose size={20}/>
        </Button>
      </div>
      <div className="p-4">
        <div className="h-16 grid grid-cols-6 grid-rows-1 gap-1 justify-items-center">
          {imagesMap.map((image, index) => (
            <div
              key={image + index}
              className="w-16 h-16 bg-cover bg-center rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ backgroundImage: `url(${image})` }}
              role="button"
              tabIndex={0}
              onClick={() => setMainImage(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setMainImage(image);
                }
              }}
            />
          ))}
        </div>
      </div>
      <div className="py-7 px-10 flex flex-col ">
          <div className="flex flex-col mb-10">
            <h1 className="text-[#4D6F80] font-bold text-4xl mb-5">Chacoreira do dede</h1>
            <p className="text-[#5C8599] font-semibold text-[18px]">acesso para toda familia de todos os lugares</p>
          </div>
          <RouteToDestination text="Ver rotas no Google Maps" type="visualizer" />
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

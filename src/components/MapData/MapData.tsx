"use client"
import { CgClose } from "react-icons/cg";
import Button from "../Button";
import Card from "../Card/Card";
import RouteToDestination from "../RouteToDestination/RouteToDestination";
import { BsClock, BsExclamationCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import useInfo from "@/utils/hooks/useInfo";
import clsx from "clsx";
import { useGetLocal } from "@/utils/api/routes/useGetLocal";
import MainImage from "../MainImage/MainImage";
import ImagesGrid from "../ImagesGrid/ImagesGrid";

export default function MapData() {
  const {isOpenView, onClose, id} = useInfo()
  const { data, isLoading } = useGetLocal(id)

  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (data?.photos && Array.isArray(data.photos) && data.photos.length > 0) {
      setMainImage(data.photos[0].url);
    }
  }, [data]);

  return (
    <div  className={clsx(
      "w-[580px] h-full absolute bg-black z-20 overflow-y-auto shadow-xl transition-transform duration-500 ease-in-out",
      isOpenView && !isLoading ? "translate-x-0" : "-translate-x-full pointer-events-none"
    )}>
      {!isLoading && data && 
        <>
          <div
            className="w-full h-80 bg-cover bg-center relative transition-all duration-500"
          >
            <MainImage mainImage={mainImage} />
            <Button className=" absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-black rounded-md text-white hover:text-gray-300 hover:bg-gray-950 cursor-pointer" onClick={() => onClose("view")} >
              <CgClose size={20}/>
            </Button>
          </div>
          <div className="p-4">
            <div className="h-16 grid grid-cols-6 grid-rows-1 gap-1 justify-items-center">
              {data.photos.map((image, index) => (
                <ImagesGrid 
                  image={image} 
                  index={index} 
                  setMainImage={setMainImage} 
                  key={image.url + index}
                />
              ))}
            </div>
          </div>
          <div className="py-7 px-10 flex flex-col ">
              <div className="flex flex-col mb-10">
                <h1 className="text-[#5CE4E4] font-bold text-4xl mb-5">{data.name}</h1>
                <p className="text-white font-semibold text-[18px]">{data.description}</p>
              </div>
              <RouteToDestination 
                onSelect={() => {}}
                text="Ver rotas no Google Maps" 
                type="visualizer" 
                position={data.location}
                marker_pin="logo-1"
              />
              <div className="border-[1px] border-[#5CE4E4] my-14"/>
              <div className="">
                <div className="flex flex-col mb-10">
                  <h1 className="text-[#5CE4E4] font-bold text-2xl mb-3">Informações da visita</h1>
                  <p className="text-white font-semibold text-[18px]">{data.instructions}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <Card
                    Icon={BsClock}
                    className="border border-[#5CE4E4] bg-linear-to-br from-[#E6F7FB] to-white"
                    iconClassName="text-[#15B6D6]"
                    title="Horário de visitas"
                    subTitle={data.visitHour}
                    titleClassName="text-[#5C8599]"
                  />
                  <Card
                    Icon={BsExclamationCircle}
                    className="border border-[#A1E9C5] bg-linear-to-br from-[#E6F7FB] to-white"
                    iconClassName="text-[#39CC83]"
                    title={data.weekend=== "yes" ? "Atendemos" : "Não atendemos"}
                    subTitle="Fim de semana"
                    titleClassName="text-[#37C77F]"
                  />
                </div>
              </div>
          </div>
        </>
      }
    </div>
  );
}

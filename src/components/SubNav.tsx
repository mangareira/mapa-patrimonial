import Image from "next/image";

export default function SubNav() {
  return (
    <div className="flex px-20 pb-20 pt-10 flex-col text-white bg-black h-full justify-between">
      <div className="">
        <Image src={"/logo.png"} alt="logo" width={250} height={250} />
      </div>
      <div className="">
        <p className="font-semibold text-[40px] mb-4 ">Escolha um Patrimônio no Mapa</p>
        <p className="font-light text-xl leading-7">Há muitas construções históricas que estão esperando a sua visita.</p>
      </div>
      <div className="text-[18px] leading-7">
        <p className="font-semibold">Maranhão</p>
        <span>Barra do Corda</span>
      </div>
    </div>
  )
}
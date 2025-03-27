import Image from "next/image";

export default function SubNav() {
  return (
    <div className="flex p-20 flex-col text-white bg-linear-to-r from-[#15D6D6] to-[#15B6D6] h-full justify-between">
      <div className="">
        <Image src={"/logo.png"} alt="logo" width={80} height={80} />
      </div>
      <div className="">
        <p className="font-extrabold text-[40px] mb-4">Escolha um patrimonio no mapa</p>
        <p className="font-light text-xl leading-7">A Muitas construções historicas estão esperando a sua visita :)</p>
      </div>
      <div className="text-[18px] leading-7">
        <p className="font-extrabold ">Maranhão</p>
        <span>Barra do corda</span>
      </div>
    </div>
  )
}
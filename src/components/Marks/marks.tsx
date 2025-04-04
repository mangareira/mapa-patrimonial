import Image from "next/image";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import type { MarksProps } from "@/utils/interfaces/marks-props";
import useInfo from "@/utils/hooks/useInfo";

export default function Marks({ name }: MarksProps) {
  const {onOpen} = useInfo()
  return (
    <div className="absolute bottom-1/2 right-1/2 flex items-center" key={name}>
      <div className="relative group">
        <Image
          src="/logo.png"
          alt="mark"
          width={50}
          height={50}
          className="cursor-pointer "
        />
        <div className="
          absolute left-full top-1/2 -translate-y-1/2
          whitespace-nowrap opacity-0 translate-x-[-10px] 
          pointer-events-none group-hover:opacity-100 
          group-hover:translate-x-0 group-hover:pointer-events-auto 
          transition-all duration-700 bg-white h-[64px] w-[244px] 
          flex flex-row items-center justify-between px-2 rounded-[20px]
        ">
          <p className="text-xl font-bold leading-normal pl-2 whitespace-nowrap">{name}</p>
          <Button className="text-white flex justify-center items-center w-10 h-10 rounded-xl" onClick={onOpen}>
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
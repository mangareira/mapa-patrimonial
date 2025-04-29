"use client"
import { BiPlus } from "react-icons/bi";
import MapMarks from "./MapMarks";
import Button from "./Button";
import useInfo from "@/utils/hooks/useInfo";

export default function Maps() {
  const {onOpen} = useInfo()
  return (
    <div className="h-full relative">
      <MapMarks />
      <Button 
        className="absolute bottom-10 right-10 flex justify-center items-center bg-black z-10 w-16 h-16 rounded-[20px] hover:bg-gray-950 cursor-pointer " 
        onClick={() => onOpen("select")}
      >
        <BiPlus size={40} className="text-white" />
      </Button>
    </div>
  )
}
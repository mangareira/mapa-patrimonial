"use client"
import { BiPlus } from "react-icons/bi";
import MapMarks from "./MapMarks";
import Button from "./Button";

export default function Maps() {
  return (
    <div className="h-full relative">
      <MapMarks />
      <Button className="absolute bottom-10 right-10 flex justify-center items-center z-10 w-16 h-16 rounded-[20px] " onClick={() => {}}>
        <BiPlus size={40} className="text-white" />
      </Button>
    </div>
  )
}
import { useFormContext } from "react-hook-form"
import { FormProps } from "@/utils/interfaces/form-props"
import { Label } from "../ui/label"
import { useEffect } from "react"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export default function WeekendToggle() {
  const { register, setValue, watch, formState: { errors } } = useFormContext<FormProps>()
  const weekendValue = watch("weekend")

  useEffect(() => {
    register("weekend", { required: "Selecione uma opção" })
  }, [register])

  return (
    <div className="space-y-2">
      <Label className="text-[16px] text-white">Atende fim de semana?</Label>
      
      <ToggleGroup
        type="single"
        value={weekendValue}
        onValueChange={(value: "yes" | "no") => {
          if (value) setValue("weekend", value)
        }}
        className="grid grid-cols-2 gap-2 bg-white w-full mb-5 rounded-[20px]"
      >
        <ToggleGroupItem 
          value="yes" 
          aria-label="Sim"
          className="data-[state=on]:bg-green-500 h-12  hover:rounded-l-[20px] data-[state=on]:rounded-l-[20px]"
        >
          Sim
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="no" 
          aria-label="Não"
          className="data-[state=on]:bg-red-500 h-12 hover:rounded-r-[20px] data-[state=on]:rounded-r-[20px]"
        >
          Não
        </ToggleGroupItem>
      </ToggleGroup>

      {errors.weekend && (
        <p className="text-red-500 text-sm mt-1">{errors.weekend.message}</p>
      )}
    </div>
  )
}
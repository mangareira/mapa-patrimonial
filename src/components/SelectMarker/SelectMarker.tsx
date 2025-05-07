import { Controller, useFormContext } from "react-hook-form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../ui/select";
import { FormProps } from "@/utils/interfaces/form-props";
import { Label } from "../ui/label"; // Importe o componente Label do shadcn

export default function SelectMarker() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormProps>();

  return (
    <div className="space-y-2">
      <Label className="text-white text-[16px]">Tipo de patrimônio</Label>
      <Controller
        name="marker_pin" // Nome do campo no seu formulário
        control={control}
        defaultValue=""
        rules={{ required: "Selecione um tipo de patrimônio" }}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id="heritageType"
              className="w-full px-7 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] text-[18px] text-black"
            >
              <SelectValue placeholder="Selecione o tipo de patrimônio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="logo-1">Patrimônio Imaterial</SelectItem>
              <SelectItem value="logo-2">Patrimônio Arquitetônico</SelectItem>
              <SelectItem value="logo-3">Patrimônio Natural</SelectItem>
              <SelectItem value="logo-4">Patrimônio Material Indígena</SelectItem>
              <SelectItem value="logo-5">Sustentabilidade</SelectItem>
              <SelectItem value="logo-6">Patrimônio Imaterial Indígena</SelectItem>
              <SelectItem value="logo-7">Principais Pontos Turísticos</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      {errors.marker_pin && (
        <div role="alert" className="text-red-500 text-sm mt-1">
          {errors.marker_pin.message}
        </div>
      )}
    </div>
  );
}
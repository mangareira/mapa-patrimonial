import type { FormProps } from "@/utils/interfaces/form-props";
import type { InputPhotosProps } from "@/utils/interfaces/input-photos-props";
import clsx from "clsx";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { CgClose } from "react-icons/cg";

export default function InputPhotos({ label, observation }: InputPhotosProps) {
  const { control, register, formState: {errors} } = useFormContext<FormProps>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "photos",
    rules: {
      required: {
        message: "Tem que ter pelo menos uma imagem",
        value: true
      }
    },
  });
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  
  return (
    <div className="flex flex-col gap-2 mb-5">
      {label && (
        <div className="flex items-end">
          <label className="text-white font-semibold text-[16px]" htmlFor="">
            {label}
          </label>
          {observation && (
            <p className="text-[14px] ml-5 text-white font-normal">{observation}</p>
          )}
        </div>
      )}

      {fields.map((field, index) => (
        <div
          key={field.id}
          className={clsx(
            "relative flex items-center px-7 rounded-[20px] border bg-[#F5F8FA] h-16 text-[18px] transition",
            focusedIndex === index ? "border-[#96D2F0] ring-1 ring-blue-400" : "border-[#D3E2E5]"
          )}
        >
          <input
            {...register(`photos.${index}.url`, { required: "URL obrigatória" })}
            className="flex-1 bg-transparent outline-none text-[#039FAA] text-[18px] truncate"
            type="url"
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
          {errors.photos?.[index]?.url && (
            <span className="text-red-500 text-sm">
              {errors.photos[index].url?.message}
            </span>
          )}
          <button
            type="button"
            onClick={() => remove(index)}
            className="ml-2 text-pink-500 hover:text-pink-700 bg-white h-9 w-9 flex justify-center items-center rounded-[10px] border border-[#D3E2E5] hover:outline-none hover:ring-1 hover:ring-gray-700"
          >
            <CgClose size={20} />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ url: "" })}
        className="h-16 border-2 border-dashed border-[#5CE4E4] bg-[#F5F8FA] rounded-[20px] flex items-center justify-center text-[#15C3D6] hover:opacity-80 cursor-pointer text-[30px]"
      >
        +
      </button>

      {errors.photos?.root?.message && <span className="text-red-500 text-sm">{errors.photos.root.message}</span>}
    </div>
  );
}

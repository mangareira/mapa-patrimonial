import type { ButtonProps } from "@/utils/interfaces/button-props";

export default function Button({children, className, onClick}: ButtonProps) {
  return (
    <button
      className={`${className} bg-[#15C3D6] hover:bg-[#17D6EB] ease-out cursor-pointer `}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

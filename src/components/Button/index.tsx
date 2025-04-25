import type { ButtonProps } from "@/utils/interfaces/button-props";

export default function Button({children, className, onClick, type, disable}: ButtonProps) {
  return (
    <button
      className={`bg-[#5CE4E4]  ease-out  ${className}`}
      type={type || "button"}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  )
}

import type { CardProps } from "@/utils/interfaces/card-props";

export default function Card({className, Icon, title, subTitle, iconClassName, titleClassName}: CardProps) {
  return (
    <div className={`${className} flex flex-col items-start w-60 h-44 rounded-[20px] px-5 py-8 justify-between`}>
      <div  className={iconClassName}>
        <Icon size={35}/>
      </div>
      <div className="">
        <div className={`text-[18px] ${titleClassName}`}>{title}</div>
        <div className={`text-[18px] ${titleClassName}`}>{subTitle}</div>
      </div>
    </div>
  )
}

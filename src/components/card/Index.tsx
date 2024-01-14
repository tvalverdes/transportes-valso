import { CardProps } from "@/types/types"
import Image from "next/image"

export const Card = ({ image, title, description, color }: CardProps) => {
    return (
        <div className={`${color}  flex flex-col gap-4 m-1 sm:m-4 rounded-xl text-start md:text-center py-12 px-4  items-center border shadow-md`}>
            <Image width={100} height={100} src={image} alt="Alternativa" className="rounded-full" quality={100} />
            <h3 className="text-2xl font-semibold text-center">{title}</h3>
            <p className="text-md opacity-95">{description}</p>
        </div>
    )
}
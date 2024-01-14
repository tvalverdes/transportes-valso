import Image from "next/image"

export type CardProps = {
    image: string
    title: string
    description: string
    color: CardColor
}

export enum CardColor {
    GREEN = "bg-primary text-white",
    WHITE = "bg-white text-black"
}

export const Card = ({ image, title, description, color }: CardProps) => {
    return (
        <div className={`${color} flex flex-col gap-4 m-4 rounded-xl text-center p-12 items-center border shadow-md`}>
            <Image width={100} height={100} src={image} alt="Alternativa" className="rounded-full" quality={100} />
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-md opacity-95">{description}</p>
        </div>
    )
}
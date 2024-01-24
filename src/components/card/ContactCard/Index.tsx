import { ActionButton } from "@/components/ActionButton/Index"
import { ContactCard as ContactProps } from "@/types/types"

export const ContactCard = ({ ...data }: ContactProps) => {
    return (
        <div className="h-auto min-h-56 w-full max-w-80 bg-understate bg-opacity-40 relative rounded-lg">
            <div className="bg-primary h-fit p-1 absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
                <img className="w-12" src={data.image} alt="Teléfono" />
            </div>
            <div className="flex flex-col gap-4 pt-12 pb-4 ps-8 pe-4">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="text-slate-600">{data.description}</p>
                {data.button ? <ActionButton text={data.button.text} url={data.button.url} /> : null}
            </div>
        </div>
    )
}
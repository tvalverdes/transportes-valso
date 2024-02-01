import { ActionButton } from "@/components/action-button/Index"

const data = {
    title: "Transporte De Carga Eficiente Y Confiable",
    description: "Nos especializamos en atender y satisfacer tus necesidades del sector agroindustrial en cuanto al alquiler de vehículos y transporte de carga"

}

export const Hero = () => {
    return (
        <main className="bg-hero-image hero">
            <div className="relative flex flex-col w-full md:w-1/2 h-auto justify-start
            pt-36 pb-20 px-8 gap-12 items-start text-white">
                <h1 className="text-2xl md:text-6xl">{data.title}</h1>
                <p className="text-md md:text-2xl opacity-90">{data.description}</p>
                <ActionButton text="Contáctanos" url="/contacto" />
            </div>
        </main>
    )
}
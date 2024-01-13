import { ActionButton } from "@/components/action-button/Index"

export const Hero = () => {
    return (
        <main className="hero">
            <div className="relative flex flex-col w-1/2 h-auto justify-start pt-36 ps-8 gap-12 items-start text-white">
                <h1 className="text-6xl">Transporte De Carga Eficiente Y Confiable</h1>
                <p className="text-2xl opacity-90">Nos especializamos en atender y satisfacer tus necesidades del
                    sector agroindustrial en cuanto al alquiler de vehículos y transporte de carga</p>
                <ActionButton text="Contáctanos" url="/contacto" />
            </div>
        </main>
    )
}
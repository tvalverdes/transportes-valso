import { ActionButton } from "@/components/action-button/Index"
import { SectionData } from "@/components/section-data/Index"

export const WorkWithUs = () => {
    return (
        <section className="bg-work-mobile-image sm:bg-work-image hero bg-contain">
            <div className="relative flex flex-col w-full h-auto justify-end sm:justify-center
            sm:pt-36 sm:pb-20 py-2 px-4 gap-12 sm:items-center text-white sm:text-center sm:text-2xl">
                <SectionData sectionName="TRABAJA CON NOSOTROS"
                    title="¡No esperes más!"
                    description="Forma parte de nosotros y trabaja con las empresas más reconocidas del Perú" />
                <ActionButton text="Registrarme" url="/trabaja-con-nosotros" />
            </div>
        </section>
    )
}
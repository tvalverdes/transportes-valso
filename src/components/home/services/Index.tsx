import { Card } from "@/components/card/Index"
import { SectionData } from "@/components/section-data/Index"
import { services } from "@/constants/constants"

export const Services = () => {
    return (
        <section id='servicios' className="bg-services-image hero">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex relative text-white justify-center items-center text-center py-12 w-full">
                    <SectionData sectionName="NUESTROS SERVICIOS"
                        title="¿Qué servicios ofrecemos?"
                        description="Ofrecemos los siguientes tres servicios" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 container mx-auto z-20 relative">
                    {
                        services.map((service, index) => (
                            <Card key={index} {...service} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
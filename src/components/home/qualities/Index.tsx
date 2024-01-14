import { Card, CardColor, CardProps } from "@/components/card/Index"

const qualities: CardProps[] = [
    {
        image: "/images/home/reloj.png",
        title: "Puntualidad",
        description: "Valoramos la disciplina de la puntualidad a través del cumplimiento a tiempo de nuestros compromisos adquiridos con nuestros clientes",
        color: CardColor.WHITE
    },
    {
        image: "/images/home/balanza.png",
        title: "Honestidad",
        description: "Pilar básico que destacamos a través de la confianza y confiabilidad de nuestro servicio, así como la comunicación clara y directa con nuestros clientes",
        color: CardColor.GREEN
    },
    {
        image: "/images/home/handshake.png",
        title: "Responsabilidad",
        description: "Cumplimos con responsabilidad nuestros compromisos a través de la conducta, eficiencia, transparencia y legalidad de nuestra atención",
        color: CardColor.WHITE
    }
]

export const Qualities = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 py-12 container mx-auto">
            {
                qualities.map((quality, index) => (
                    <Card key={index} {...quality} />
                ))
            }
        </div>
    )
}
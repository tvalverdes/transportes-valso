import { CardColor, CardProps, GoalsProps } from "@/types/types"

export const companyData = {
    sectionName: "SOBRE NOSOTROS",
    title: "Transporte de carga Eficiente y Confiable",
    description: "Somos una compañía dedicada al servicio logístico de transporte de carga y personal, con soluciones que van de acuerdo a sus requerimientos."
}

export const goalsData: GoalsProps[] = [
    {
        image: "/images/home/vision.png",
        title: "Visión",
        description: "Consolidarnos como la plataforma logística número 1 en el sector agroindustria del Perú."
    },
    {
        image: "/images/home/mision.png",
        title: "Misión",
        description: "Aliviar la carga operativa e incertidumbre de nuestros clientes en sus operaciones logísticas a nivel nacional con soluciones efectivas, innovadoras y confiables."
    }
]

export const qualities: CardProps[] = [
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
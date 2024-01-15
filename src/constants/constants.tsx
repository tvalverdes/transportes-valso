import { CardProps, GoalsProps } from "@/types/types"

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
        color: "WHITE"
    },
    {
        image: "/images/home/balanza.png",
        title: "Honestidad",
        description: "Pilar básico que destacamos a través de la confianza y confiabilidad de nuestro servicio, así como la comunicación clara y directa con nuestros clientes",
        color: "GREEN"
    },
    {
        image: "/images/home/handshake.png",
        title: "Responsabilidad",
        description: "Cumplimos con responsabilidad nuestros compromisos a través de la conducta, eficiencia, transparencia y legalidad de nuestra atención",
        color: "WHITE"
    }
]

export const services: CardProps[] = [
    {
        image: "/images/home/camion.png",
        title: "Transporte de Carga Interno y Fletes",
        description: "Contrate nuestras unidades por día para recorridos internos a modalidad máquina seca, operada y/o combustible. Así como contratos por flete, por tonelada y/o por kilometraje recorrido",
        color: "WHITE"
    },
    {
        image: "/images/home/camion-personal.png",
        title: "Transporte de Personal",
        description: "Contrate nuestros distintos tipos de unidades de transporte de personal: buses, minibuses, van, minivan; por ruta programada y no programada, tanto traslado externo como interno.",
        color: "GREEN"
    },
    {
        image: "/images/home/camion-delivery.png",
        title: "Repartos Courier",
        description: "Contrate nuestras unidades de reparto para distribuir sus productos a los distintos almacenes, mayoristas o minoristas dando el servicio de reparto y/o cobranza",
        color: "WHITE"
    }
]

export const serviceFeatures = ["SOAT Comercial", "Revisión Técnica", "Tarjeta única de circulación",
    "Tarjeta de propiedad", "Equipamiento: botiquín, conos, tacos, extintor, malla, etc."]

export const serviceIncludes = "Además de lo mencionado, incluye la construcción e implementación gratuita de un software para la gestión y control del transporte y/o carga de su negocio, automatizando la programación, tarifario, ejecución, manifiesto digital, aprobación y liquidación de servicios a proveedores."

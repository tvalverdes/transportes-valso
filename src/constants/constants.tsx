import { CardProps, Clients, CompanyData, Contact, ContactCard, GoalsProps, WorkCard } from "@/types/types"
import { getEmail, getPhoneNumber } from "@/utils/contactFormat"

const contactData: Contact[] = [
    {
        name: "Dirección",
        content: "Calle Víctor Fajardo 491 Urb. Santa María 5ta Etapa",
        icon: "/icons/location.svg"
    },
    {
        name: "Teléfono",
        content: "933 531 443",
        icon: "/icons/phone.svg"
    },
    {
        name: "Correo",
        content: "contacto@transportesvalso.com",
        icon: "/icons/mail.svg"
    }
]

export const companyData: CompanyData = {
    sectionName: "SOBRE NOSOTROS",
    title: "Transporte de carga Eficiente y Confiable",
    description: "Somos una compañía dedicada al servicio logístico de transporte de carga y personal, con soluciones que van de acuerdo a sus requerimientos.",
    contactData: contactData,
    schedule: ["L - V: 9 am - 6 pm", " S: 9 am - 1 pm"]
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

const clientPhotosUrl = "/images/home/clients"
export const clients: Clients[] = [
    {
        name: "Marinasol",
        image: `${clientPhotosUrl}/marinasol.webp`
    },
    {
        name: "Corporación Soriano",
        image: `${clientPhotosUrl}/corporacion-soriano.webp`
    },
    {
        name: "Inversiones Nashimat",
        image: `${clientPhotosUrl}/nashimat.webp`
    },
    {
        name: "Hass Perú",
        image: `${clientPhotosUrl}/hassperu.webp`
    },
    {
        name: "Agrícola Cerro Prieto",
        image: `${clientPhotosUrl}/acp.webp`
    },
    {
        name: "Agrícola Copacabana",
        image: `${clientPhotosUrl}/agricola-copacabana.webp`
    },
    {
        name: "Mar Store",
        image: `${clientPhotosUrl}/marstore.webp`
    },
]

export const contactCards: ContactCard[] = [
    {
        title: "Llámanos",
        description: "Comunícate con nosotros al número: " + getPhoneNumber(),
        image: "/icons/phone.svg"
    },
    {
        title: "Chat en vivo",
        description: "Estamos disponibles los " + companyData.schedule,
        image: "/icons/chat.svg",
        button: {
            text: "Iniciar chat",
            url: `https://api.whatsapp.com/send?phone=51${getPhoneNumber()}&text=Hola,%20quisiera%20saber%20más%20sobre%20sus%20servicios`
        }
    },
    {
        title: "¿Tienes alguna duda?",
        description: "Comunícate con nosotros a través de nuestro correo",
        image: "/icons/mail.svg",
        button: {
            text: "Enviar correo",
            url: `mailto:${getEmail()}`
        }
    }
]

export const workCardData: WorkCard[] = [
    {
        image: "/trabajar-camion.webp",
        title: "Quieres que tu unidad trabaje por ti. ¡Regístrala!",
        button: {
            text: "Registrar unidad",
            url: "/trabaja-con-nosotros/registrar-unidad"
        }
    },
    {
        image: "/chofer.webp",
        title: "Te gustaría trabajar como conductor, ¡Postula!",
        button: {
            text: "Registrarme",
            url: "/trabaja-con-nosotros"
        }
    }
]

export const driversLicenseType =
    [
        "A-I", "B-1", "A-IIa", "B-IIa", "A-IIb", "B-IIb", "B-IIc", "A-IIIa", "A-IIIb", "A-IIIc"
    ]

/*  export const driversLicenseType =
 [
     { label: "A-I" },
     { label: "B-I" },
     { label: "A-IIa" },
     { label: "B-IIa" },
     { label: "A-IIb" },
     { label: "B-IIb" },
     { label: "B-IIc" },
     { label: "A-IIIa" },
     { label: "A-IIIb" },
     { label: "A-IIIc" }
 ] */

export const documentType = [
    {
        label: "DNI"
    },
    {
        label: "CE"
    }
]
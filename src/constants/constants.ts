import { CardProps, Clients, CompanyData, Contact, ContactCard, GoalsProps, RadioButtonFormat, TruckFeatures, WorkCard } from "@/types/types"
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

export const provinces = [
  "Lima", "La Libertad", "Arequipa", "Ancash", "Amazonas", "Apurímac", "Ayacucho", "Cajamarca", "Cusco", "Huancavelica", "Ica", "Junín", "Lambayeque", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
]

const truckBodyType = [
  "AUXILIO MECANICO",
  "BARANDA",
  "BARREDERA",
  "BOMBA HORMIGONERA",
  "BOMBERO",
  "BOMBONA",
  "CAMION GRUA",
  "CAÑERO",
  "CARGOBUS",
  "CHASIS CABINADO",
  "CHASIS MOTORIZADO",
  "CIGUEÑA",
  "CISTERNA COMBUSTIBLES",
  "CISTERNA",
  "COMPACTADOR",
  "COMPRESOR",
  "COMUNICACIONES",
  "DOLLY",
  "ELEVADOR",
  "ESPARCIDOR DE ASFALTO",
  "ESPARCIDOR DE MATERIA ORGANICA",
  "EXPLOSIVOS",
  "FACTORIA",
  "FURGON FRIGORIFICO",
  "FURGON ISOTERMICO",
  "FURGON",
  "GAMA BAJA",
  "GRANELERO",
  "GRUA",
  "GRUPO ELECTROGENO",
  "HORMIGONERA",
  "HOSPITAL",
  "ILUMINADOR",
  "INSTRUCCION",
  "INTERCAMBIADOR",
  "LUBRICADOR",
  "MADRINA",
  "MEZCLADOR",
  "MICROBUS",
  "MINIBUS",
  "MULTIPROPOSITO",
  "OMNIBUS PANORAMICO",
  "ONMIBUS INTERURBANO",
  "ONMIBUS URBANO",
  "PANEL",
  "PERFORADOR",
  "PICK UP",
  "PLATAFORMA",
  "PORTA CONTENEDOR",
  "PORTA TROPAS",
  "QUILLA",
  "RADIOLOGICO",
  "REMOLCADOR GRUA",
  "REMOLCADOR",
  "REPARAVIAS",
  "SANITARIO",
  "TANQUE CALORIFICO",
  "TANQUE CORROSIVO",
  "TANQUE CRIOGENICO",
  "TANQUE FRIGORIFICO",
  "TANQUE GLP",
  "TANQUE GNC",
  "TANQUE ISOTERMICO",
  "TRANSFORMADOR",
  "VALORES",
  "VEHICULO DE FERIAS",
  "VOLQUETE"
]

export const vehicleType: TruckFeatures = {
  "Bus": {
    "numberOfSeats": Array.from({ length: 52 }, (_, i) => i + 9).toString().split(",")
  },
  "Furgón/Furgoneta": {
    "type": ["Mixta", "Isotérmica", "4x4", "Combi", "Eléctrica", "Con plataforma",
      "Con caja cerrada", "De cabina con chasis", "Otra"],
    "tons": Array.from({ length: 78 }, (_, i) => 1.5 + i * 0.5).toString().split(","),
  },
  "Van/Minivan": {
    "numberOfSeats": Array.from({ length: 16 }, (_, i) => i + 5).toString().split(",")
  }, "Camión": {
    "type": truckBodyType,
    "tons": Array.from({ length: 98 }, (_, i) => 1.5 + i * 0.5).toString().split(","),
  }, "Trailer": {
    "type": truckBodyType,
    "tons": Array.from({ length: 98 }, (_, i) => 1.5 + i * 0.5).toString().split(","),
  }
}

export const featurePlaceholder: { [key: string]: string } = {
  "type": "Tipo",
  "numberOfSeats": "Número de Asientos",
  "tons": "Toneladas"
};


export const vehicleNames = [
  "Bus", "Furgón/Furgoneta", "Van/Minivan", "Camión", "Trailer"
]


export const vehicleFeatures = {
  "Bus": {
    "numberOfSeats": Array.from({ length: 52 }, (_, i) => i + 9).toString().split(",")
  },
}

export const documentType = [
  "DNI", "CE"
]

export const seatNumbers = Array.from({ length: 52 }, (_, i) => i + 9).toString().split(",")

export const imageAcceptedFileTypes = ["image/png", "image/jpg", "image/jpeg"]

export const vehicleModelRadioOptions: RadioButtonFormat[] = [
  {
    value: "Si",
    label: "Si"
  },
  {
    value: "No",
    label: "No"
  }]


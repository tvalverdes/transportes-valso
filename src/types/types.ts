import { HTMLProps } from "react"

export type ActionButtonProps = {
    text: string
    url: string
}

export type Contact = {
    name: string
    content: string
    icon: string
}

export type CompanyData = {
    sectionName: string
    title: string
    description: string
    contactData: Contact[]
    schedule: string[]
}

export type CardProps = {
    image: string
    title: string
    description?: string
    color: Color
}

type Color = "GREEN" | "WHITE"

export type GoalsProps = {
    image: string,
    title: string,
    description: string
}

export type HamburguerButtonProps = {
    method: VoidFunction
}

export type ItemsType = {
    name: string
    url: string
    style?: HTMLProps<HTMLElement>["className"];
}

export type SectionDataProps = {
    sectionName: string
    title: string
    description?: string
}

export type Clients = {
    name: string
    image: string
}

export type ContactCard = Omit<CardProps, "color"> & {
    button?: ActionButtonProps
}
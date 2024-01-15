import { HTMLProps } from "react"

export type ActionButtonProps = {
    text: string
    url: string
}

export type CardProps = {
    image: string
    title: string
    description: string
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
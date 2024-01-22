import { HTMLProps } from "react"
import { Control, FieldError, UseFormRegister } from "react-hook-form"

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

export type WorkCard = {
    image: string
    title: string
    button: ActionButtonProps
}

export type TruckValidFieldNames =
    | "name"
    | "documentType"
    | "documentNumber"
    | "driversLicenseType"
    | "phone";

export type FormData = {
    name: string;
    documentType: string;
    documentNumber: string;
    driversLicenseType: string;
    phone: string;
};

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: TruckValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    required?: boolean;
};

export type FormSelectProps = Omit<FormFieldProps, "type" | "valueAsNumber">

export type FormDropdownProps = {
    name: TruckValidFieldNames
    error: FieldError | undefined
    placeholder: string
    control: Control<FormData>
}

export type FormAutocompleteProps = FormDropdownProps & {
    options: string[]
};
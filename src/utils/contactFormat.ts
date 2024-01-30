/* eslint-disable @next/next/no-img-element */
import { companyData } from "@/constants/constants"

export const getPhoneNumber = () => {
    return companyData.contactData.find(contact => contact.name === "Teléfono")?.content
}
export const getEmail = () => {
    return companyData.contactData.find(contact => contact.name === "Correo")?.content
}
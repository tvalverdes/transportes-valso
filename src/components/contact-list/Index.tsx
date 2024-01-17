import { companyData } from "@/constants/constants"

export const ContactInfoList = () => {
    return (
        <>
            <li>{companyData.contactData.address}</li>
            <li>{companyData.contactData.phone}</li>
            <li><a href={`mailto:${companyData.contactData.email}`}>{companyData.contactData.email}</a></li>
        </>
    )
}
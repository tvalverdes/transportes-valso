import { companyData } from "@/constants/constants"

export const ContactInfo = () => {

    return (
        <>
            {companyData.contactData.map((contact, index) => (
                <li key={index}>{
                    contact.name === "Correo" ?
                        (<a className="text-wrap" href={`mailto:${contact.content}`}>{contact.content}</a>) :
                        contact.content}</li>
            ))}
        </>
    )
}
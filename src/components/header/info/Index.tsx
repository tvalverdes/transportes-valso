import { FacebookIcon } from "@/components/facebook-icon/Index"
import { companyData } from "@/constants/constants"

export const HeaderInfo = () => {
    const phoneNumber = companyData.contactData.find(item => item.name === "Teléfono")?.content || null;
    return (
        <section className="border-b-2">
            <div className="container flex justify-between items-center mx-auto px-2 py-4">
                <span className="text-understate text-sm">Teléfono: {phoneNumber}</span>
                <FacebookIcon />
            </div>
        </section>
    )
}
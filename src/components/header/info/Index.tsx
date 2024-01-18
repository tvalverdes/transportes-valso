import { FacebookIcon } from "@/components/facebook-icon/Index"
import { companyData } from "@/constants/constants"

export const HeaderInfo = () => {
    return (
        <section className="border-b-2">
            <div className="container flex justify-between items-center mx-auto px-2 py-4">
                <span className="text-understate text-sm">Teléfono: {companyData.contactData.phone}</span>
                <FacebookIcon />
            </div>
        </section>
    )
}
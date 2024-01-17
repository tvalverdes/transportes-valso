import { FacebookIcon } from "@/components/facebook-icon/Index"

export const HeaderInfo = () => {
    return (
        <section className="border-b-2">
            <div className="container flex justify-between items-center mx-auto px-2 py-4">
                <span className="text-understate text-sm">Teléfono: 933 531 443</span>
                <FacebookIcon />
            </div>
        </section>
    )
}
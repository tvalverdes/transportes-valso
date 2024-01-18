import { ContactInfo } from "@/components/contact-info/Index"
import { Metadata } from 'next'

// either Static metadata
export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Comunícate con nosotros por a través de redes sociales, correo electrónico o teléfono. Además, puedes visitarnos en nuestra oficina.',
}
const Contacto = () => {
    return (
        <main className="container mx-auto py-12 min-h-screen point-background">
            <div className="bg-white w-fit min-h-96">
                <h1 className="text-primary text-3xl">Contáctanos por estos medios:</h1>
                <ul>
                    <ContactInfo />
                </ul>
            </div>

        </main>
    )
}

export default Contacto
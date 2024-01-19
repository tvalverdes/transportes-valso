
import { ContactCard } from '@/components/card/contact-card/Index'
import { contactCards } from '@/constants/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Comunícate con nosotros por a través de redes sociales, correo electrónico o teléfono. Además, puedes visitarnos en nuestra oficina.',
}
const Contacto = () => {
    return (
        <main className="container mx-auto px-4 py-12 h-fit">
            <h1 className='text-3xl font-semibold'>Contáctanos</h1>
            <p className='text-understate text-xl py-8'>Estamos aquí para ayudarte</p>
            <div className="container mx-auto px-2 min-h-36 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
                    {
                        contactCards.map((card, index) => (
                            <ContactCard key={index} {...card} />
                        ))
                    }
                </div>

            </div>
        </main>
    )
}

export default Contacto
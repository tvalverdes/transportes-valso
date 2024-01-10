import Image from "next/image"
import { HeaderInfo } from "../header-info/Index"
import { HTMLProps } from "react"

type Items = {
    name: string
    url: string
    style?: HTMLProps<HTMLElement>["className"];
}

const items: Items[] = [
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Clientes', url: '/clientes' },
    { name: 'Contacto', url: '/contacto' },
    { name: 'Trabaja con nosotros', url: '/trabaja-con-nosotros', style: 'bg-primary p-3 text-white rounded-sm' },

]

export const Header = () => {
    return (
        <header>
            <HeaderInfo />
            <div className="container mx-auto flex justify-between items-center py-4">
                <Image width={120} height={80} src="/logo.webp" alt="logo" aria-hidden="true" />
                <ul className="flex gap-4">
                    {
                        items.map(item => (
                            <li key={item.name} className="text-black uppercase"><a className={item.style} href={item.url}>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
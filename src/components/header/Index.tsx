import Image from "next/image"
import { HeaderInfo } from "../header-info/Index"
import { HTMLProps } from "react"
import { ActionButton } from "../action-button/Index"

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

]

export const Header = () => {
    return (
        <header>
            <HeaderInfo />
            <div className="container mx-auto flex justify-between items-center py-4">
                <Image quality={100} priority width={130} height={80} src="/logo.webp" alt="logo" aria-hidden="true" />
                <ul className="flex gap-4 items-center">
                    {
                        items.map(item => (
                            <li key={item.name} className="text-black text-xl"><a className={item.style} href={item.url}>{item.name}</a></li>
                        ))
                    }
                    <li><ActionButton text="Trabaja con nosotros" url="/trabaja-con-nosotros" /></li>
                </ul>
            </div>
        </header>
    )
}
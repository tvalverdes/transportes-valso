import { ActionButton } from "@/components/action-button/Index";
import { HTMLProps } from "react";

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

export const Items = () => {
    return (
        <>
            {
                items.map(item => (
                    <li key={item.name} className="text-black text-xl"><a className={item.style} href={item.url}>{item.name}</a></li>
                ))
            }
            <li><ActionButton text="Trabaja con nosotros" url="/trabaja-con-nosotros" /></li>
        </>
    )
}
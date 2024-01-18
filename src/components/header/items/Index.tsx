import { ActionButton } from "@/components/action-button/Index";
import { ItemsType } from "@/types/types";
import { usePathname } from "next/navigation";

const items: ItemsType[] = [
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Clientes', url: '/clientes' },
    { name: 'Contacto', url: '/contacto' },

]

export const Items = () => {
    const path = usePathname()
    return (
        <>
            {
                items.map(item => (
                    <li key={item.name} className={`${path == item.url ? 'text-primary' : 'text-dark'} text-xl menu__link`}><a className={item.style} href={item.url}>{item.name}</a></li>
                ))
            }
            <li><ActionButton text="Trabaja con nosotros" url="/trabaja-con-nosotros" /></li>
        </>
    )
}
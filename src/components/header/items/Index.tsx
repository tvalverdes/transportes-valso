import { ActionButton } from "@/components/ActionButton/Index";
import { isMenuShowingState } from '@/store/useStore';
import { ItemsType } from "@/types/types";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from 'react-scroll';

const items: ItemsType[] = [
    { name: 'Nosotros', url: '/', to: 'nosotros'},
    { name: 'Servicios', url: '/', to: 'servicios'},
    { name: 'FAQ', url: '/', to: 'faq'},
    { name: 'Clientes', url: '/', to: 'clientes'},
    { name: 'Contacto', url: '/contacto'},
]

export const Items = () => {
    const { setMenuState } = isMenuShowingState()
    const handleOnClick = () => {
      setMenuState(false)
    }
    const path = usePathname()

    return (
        <>
            {items.map(item => (
                <li key={item.name} className={` text-xl menu__link cursor-pointer`}>
                    {item.to && path == '/'  ? (
                        <ScrollLink to={item.to} spy={true} smooth={true} duration={300} onClick={handleOnClick}>{item.name}</ScrollLink>
                    ) : (
                        <Link  className={path == item.url ? 'text-primary' : 'text-dark'} href={item.url} onClick={handleOnClick}>
                            {item.name}
                        </Link>
                    )}
                </li>
            ))}
            <li><ActionButton text="Trabaja con nosotros" url="/trabaja-con-nosotros" /></li>
        </>
    )
}
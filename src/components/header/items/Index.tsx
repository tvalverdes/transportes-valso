import { ActionButton } from "@/components/ActionButton/Index";
import { isMenuShowingState } from '@/store/useStore';
import { ItemsType } from "@/types/types";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from 'react-scroll';

const items: ItemsType[] = [
    { name: 'Nosotros', url: '/nosotros', to: 'nosotros'},
    { name: 'Servicios', url: '/servicios', to: 'servicios'},
    { name: 'FAQ', url: '/faq', to: 'faq'},
    { name: 'Clientes', url: '/clientes', to: 'clientes'},
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
                <li key={item.name} className={`${path == item.url ? 'text-primary' : 'text-dark'} text-xl menu__link`}>
                    {item.to ? (
                        <ScrollLink to={item.to} spy={true} smooth={true} duration={300} onClick={handleOnClick}>{item.name}</ScrollLink>
                    ) : (
                        <Link href={item.url} onClick={handleOnClick}>
                            {item.name}
                        </Link>
                    )}
                </li>
            ))}
            <li><ActionButton text="Trabaja con nosotros" url="/trabaja-con-nosotros" /></li>
        </>
    )
}

/* {
  items.map(item => (
      <li key={item.name} className={`${path == item.url ? 'text-primary' : 'text-dark'} text-xl menu__link`}><a onClick={() => setMenuState(false)} className={item.style} href={item.url}>{item.name}</a></li>
  ))
} */
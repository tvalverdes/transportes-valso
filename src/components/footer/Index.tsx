import { companyData } from "@/constants/constants"
import Link from "next/link"
import { FacebookIcon } from "../facebook-icon/Index"
import { ActionButton } from "../ActionButton/Index"
import { ContactInfo } from "../contact-info/Index"
import { ScheduleList } from '../schedule-list/Index';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto py-12 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white gap-16">
                <div className="flex flex-col gap-4">
                    <p>{companyData.description}</p>
                    <Link className="text-primary w-fit menu__link" href="/politica-de-privacidad">Política de Privacidad</Link>
                    <FacebookIcon />
                </div>
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-xl">Información de Contacto</h2>
                    <ul className="list-disc ps-4 text-understate">
                        <ContactInfo />
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl">Horario de Atención</h2>
                    <ul className="list-disc ps-4 text-understate">
                        <ScheduleList />
                    </ul>
                    <ActionButton text="Contáctanos" url="/contacto" />
                </div>
            </div>
            <small className="flex w-full justify-center pb-12 px-2 text-white">Transportes y Servicios VALSO ©
                {new Date().getFullYear()}. Todos los derechos reservados.</small>
        </footer>
    )
}
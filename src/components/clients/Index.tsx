import { SectionData } from "../section-data/Index"
import { ClientList } from "./client-list/Index"

export const Clients = () => {
    return (
        <section className="container mx-auto px-1">
            <div className="text-center py-12">
                <SectionData sectionName="NUESTROS CLIENTES" title="Clientes que usan nuestro servicio" />
            </div>
            <div className="flex justify-center items-center pb-8">
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 place-items-center max-w-3xl gap-4">
                    <ClientList />
                </ul>
            </div>
        </section>
    )
}
import { WorkCard } from "@/components/card/work-card/Index"
import { workCardData } from "@/constants/constants"

const TrabajaConNosotrosPage = () => {
    return (
        <main className="container mx-auto py-12">
            <div className="text-center flex flex-col gap-4">
                <h1 className="text-2xl text-primary font-semibold">Forma parte de Transportes Valso</h1>
                <h2 className="text-understate text-xl">Regístrate y empieza a trabajar con las mejores empresas del Perú</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-1 gap-8 place-items-center py-8">
                {
                    workCardData.map((work, index) => (
                        <WorkCard key={index} {...work} />
                    ))
                }
            </div>
        </main>
    )
}

export default TrabajaConNosotrosPage
import { serviceFeatures, serviceIncludes } from "@/constants/constants"

export const Questions = () => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">¿Qué incluye el servicio?</h4>
            <p className="text-understate text-pretty">{serviceIncludes}</p>
            <h4 className="text-lg font-semibold">¿Qué características incluye el vehículo?</h4>
            <ul className="flex flex-col list-disc ps-4 gap-2">
                {
                    serviceFeatures.map((feature, index) => (
                        <li key={index} className="text-sm text-understate">{feature}</li>
                    ))
                }
            </ul>
        </div>
    )
}
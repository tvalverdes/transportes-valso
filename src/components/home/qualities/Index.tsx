import { Card } from "@/components/card/Index"
import { qualities } from "@/constants/constants"

export const Qualities = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 container mx-auto md:-mt-16 z-20 relative">
            {
                qualities.map((quality, index) => (
                    <Card key={index} {...quality} />
                ))
            }
        </div>
    )
}
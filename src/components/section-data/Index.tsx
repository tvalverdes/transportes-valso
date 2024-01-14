import { SectionDataProps } from "@/types/types"

export const SectionData = ({ ...data }: SectionDataProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-primary">{data.sectionName}</h2>
            <h3 className="text-3xl font-semibold">{data.title}</h3>
            <p className="text-lg text-understate">{data.description}</p>
        </div>
    )
}
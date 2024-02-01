/* eslint-disable @next/next/no-img-element */
import { Goals } from "@/components/goals/Index"
import { SectionData } from "@/components/section-data/Index"
import { companyData } from "@/constants/constants"

export const About = () => {
    return (
        <section id='nosotros' className="grid grid-cols-1 lg:grid-cols-2 py-24">
            <div>
                <img src="/images/home/about.webp" className="w-full" alt="about" />
            </div>
            <div className="p-12">
                <SectionData sectionName={companyData.sectionName}
                    title={companyData.title} description={companyData.description} />
                <Goals />
            </div>
        </section>
    )
}
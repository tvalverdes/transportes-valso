/* eslint-disable @next/next/no-img-element */
import { SectionData } from "@/components/section-data/Index"
import { Questions } from "./questions/Index"

export const Faq = () => {
    return (
        <section id='faq' className="grid grid-cols-1 lg:grid-cols-2 py-24 gap-4">
            <div className="px-12">
                <SectionData sectionName="FAQ" title="Preguntas Frecuentes" />
                <Questions />
            </div>
            <div className="flex justify-center">
                <img src="/images/home/faq.webp" className="px-1 w-full lg:w-2/3 rounded-xl" alt="about" />
            </div>
        </section>
    )
}
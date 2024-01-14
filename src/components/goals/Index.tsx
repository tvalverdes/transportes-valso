/* eslint-disable @next/next/no-img-element */

import { goalsData } from "@/constants/constants"


export const Goals = () => {
    return (
        <>
            {goalsData.map((goal) => {
                return (
                    <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center py-6 gap-8" key={goal.title}>
                        <img className="h-12" src={goal.image} alt={goal.title} />
                        <div className="flex flex-col text-pretty">
                            <h4 className="font-semibold opacity-80 text-lg">{goal.title}</h4>
                            <p className="text-understate">{goal.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
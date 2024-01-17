import { companyData } from "@/constants/constants"

export const ScheduleList = () => {
    return (
        <>
            {companyData.schedule.map((schedule, index) => (
                <li key={index}>{schedule}</li>
            ))}
        </>
    )
}
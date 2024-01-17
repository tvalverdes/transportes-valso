/* eslint-disable @next/next/no-img-element */
import { clients } from "@/constants/constants"

export const ClientList = () => {
    return (
        <>
            {
                clients.map((client, index) => (
                    <li key={index}>
                        <img className="rounded-full max-h-52" src={client.image} alt={client.name} />
                    </li>
                ))
            }
        </>
    )
}
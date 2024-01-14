import Link from "next/link"
import './styles.css'
import { ActionButtonProps } from "@/types/types"

export const ActionButton = ({ text, url }: ActionButtonProps) => {
    return (
        <>
            <Link href={url} className="btn">{text}</Link>
        </>
    )
}
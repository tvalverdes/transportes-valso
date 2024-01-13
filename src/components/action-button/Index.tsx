import Link from "next/link"
import './styles.css'

type ActionButtonProps = {
    text: string
    url: string
}

export const ActionButton = ({ text, url }: ActionButtonProps) => {
    return (
        <>
            <Link href={url} className="btn">{text}</Link>
        </>
    )
}
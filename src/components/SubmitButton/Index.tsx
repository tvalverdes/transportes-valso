import { SubmitButtonProps } from "@/types/types"


export const SubmitButton: React.FC<SubmitButtonProps> = ({
    text,
    color
}) => {
    return (
        <button className={`bg-${color} bg-opacity-80 hover:bg-opacity-100 transition-all ease-in-out duration-300 p-2 rounded-md`}>{text}</button>
    )
}
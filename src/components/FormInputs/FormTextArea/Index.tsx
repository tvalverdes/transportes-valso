import { FormTextAreaProps } from "@/types/types"
import { TextField } from "@mui/material"

export const FormTextArea: React.FC<FormTextAreaProps> = (
    {
        name,
        register,
        placeholder,
        required
    }
) => {
    return (
        <TextField
            placeholder={placeholder}
            {...register(name)}
            required={required ?? true}
        />
    )
}
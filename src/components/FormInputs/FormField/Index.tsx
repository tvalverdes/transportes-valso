import { FormFieldProps } from "@/types/types";
import { TextField } from "@mui/material";



export const FormField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    required
}) => {
  
    return (
        <div >
            <TextField
                variant="outlined"
                type={type}
                fullWidth
                required={required ?? true}
                label={placeholder}
                {...register(name)}
                error={error?.message ? true : false}
                helperText={error?.message}
            />
        </div>
    )
}
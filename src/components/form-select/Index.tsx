import { MenuItem, TextField } from "@mui/material";
import { documentType } from "@/constants/constants";
import { FormSelectProps } from "@/types/types";

export const FormSelect: React.FC<FormSelectProps> = ({
    name,
    error,
    placeholder,
    register
}) => {
    return (
        <>
            <TextField {...register(name)}
                error={!!error?.message}
                select label={placeholder}
                helperText={error?.message}
                defaultValue={"DNI"}
                InputLabelProps={{ shrink: true }}
            >
                {documentType.map((item, index) => (
                    <MenuItem key={index} value={item.label}>
                        {item.label}
                    </MenuItem>
                ))}
            </TextField>
        </>



    )
}
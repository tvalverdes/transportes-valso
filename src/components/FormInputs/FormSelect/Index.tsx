import { MenuItem, TextField } from "@mui/material";
import { FormSelectProps } from "@/types/types";

export const FormSelect: React.FC<FormSelectProps> = ({
    name,
    error,
    placeholder,
    register,
    options
}) => {
    return (
        <>
            <TextField {...register(name)}
                error={!!error?.message}
                select 
                label={placeholder}
                helperText={error?.message}
                defaultValue={options[0]}
                InputLabelProps={{ shrink: true }}
            >
                {options.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </TextField>
        </>



    )
}
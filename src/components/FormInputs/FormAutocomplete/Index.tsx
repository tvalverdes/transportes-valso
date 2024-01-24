import { FormAutocompleteProps } from "@/types/types";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

export const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
    name,
    control,
    options,
    placeholder,
    error
}) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <Autocomplete disablePortal disableClearable onChange={(event, item) => {
                            onChange(item);
                        }} value={value ?? options[0]}
                            options={options}
                            isOptionEqualToValue={(option, value) => option === value}
                            renderInput={(params) => <TextField required {...params} label={placeholder} helperText={error?.message} error={!!error?.message} />} />
                    </>
                )}
            />


        </>
    )
}

{/* <Autocomplete disablePortal {...register(name)} onSelect={ } isOptionEqualToValue={(option: any, value: any) =>
option.label === value.label
} options={top5Films} renderInput={(params) => <TextField {...params} inputProps={{ ...params.inputProps }} label={placeholder} />} /> */}

/*  <>
            <Controller
                name={name}
                control={control}
                render={() => (
                    <>
                        <Autocomplete disablePortal {...register(name), {
                            required: "campo requerido"
                        }} isOptionEqualToValue={(option: any, value: any) =>
                            option.label === value.label
                        } options={options} renderInput={(params) => <TextField {...params} label={placeholder} />} />
                    </>
                )}
            />

        </> */
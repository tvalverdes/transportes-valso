import { FormAutocompleteProps } from "@/types/types";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
    name,
    control,
    options,
    placeholder,
    error,
    onChangeMethod
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
                            {onChangeMethod && onChangeMethod(item)}
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
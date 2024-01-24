import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod'
import { FormField } from "../../FormInputs/FormField/Index";
import { FormAutocomplete } from "../../FormInputs/FormAutocomplete/Index";
import { provinces, vehicleType } from "@/constants/constants";
import { SubmitButton } from '../../SubmitButton/Index';
import { FormTextArea } from "@/components/FormInputs/FormTextArea/Index";
import { FileUpload } from "@/components/FileUpload/Index";
import { useFormNumberState } from "@/store/useStore";
import { vehicleDataSchema } from "@/schema/schemas";


type FormFields = z.infer<typeof vehicleDataSchema>

export const VehicleDataForm = () => {
    const { goToPreviousForm } = useFormNumberState();
    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({
        defaultValues: {
            location: provinces[0],
            brand: '',
            is4x4: false,
            model: '',
            vehicleType: vehicleType[0],
        },
        resolver: zodResolver(vehicleDataSchema)
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

    return (
        <form className="flex flex-col gap-4 my-8" onSubmit={handleSubmit(onSubmit)}>
            <FormAutocomplete name="location" placeholder="Ubicación" control={control} options={provinces} error={errors.location} />
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-4 basis-2/5">
                    <FormField name="brand" register={register} placeholder="Marca" type="text" error={errors.brand} />
                    <FormField name="model" placeholder="Modelo" register={register} type="text" error={errors.model} />
                </div>
                <div className="flex flex-col gap-4 basis-3/5">
                    <FormField name="fabricationYear" placeholder="Año de fabricación" register={register} type="number" error={errors.fabricationYear} />
                    <FormAutocomplete name="vehicleType" control={control} options={vehicleType} placeholder="Tipo de licencia" error={errors.vehicleType} />
                </div>
            </div>
            <FormTextArea name="comment" placeholder="Si deseas, puedes dejar un comentario" register={register} required={false} />
            <FileUpload name="vehicleImage" register={register} error={errors.vehicleImage} />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <SubmitButton color="primary" type="submit" text="ENVIAR" />
                <SubmitButton color="understate" type="button" text="REGRESAR" onClick={goToPreviousForm} />
            </div>
        </form>
    )
}
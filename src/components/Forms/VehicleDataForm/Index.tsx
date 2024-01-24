import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod'
import { FormField } from "../../FormInputs/FormField/Index";
import { FormAutocomplete } from "../../FormInputs/FormAutocomplete/Index";
import { imageAcceptedFileTypes, provinces, vehicleType } from "@/constants/constants";
import { SubmitButton } from '../../SubmitButton/Index';
import { FormTextArea } from "@/components/FormInputs/FormTextArea/Index";
import { FileUpload } from "@/components/FileUpload/Index";
import { OnDataChange } from "@/types/types";

const schema = z.object({
    location: z.string().trim()
        .min(1, { message: 'Debes ingresar la ubicación' }),
    brand: z.string().trim().toUpperCase().min(1, { message: 'Ingresa la marca' }),
    is4x4: z.boolean(),
    model: z.string().trim().min(1, { message: 'Ingresa el modelo' }),
    fabricationYear: z.string().trim().refine(data => /^\d{4}$/.test(data), {
        message: 'Formato de año inválido',
    })
        .transform(data => parseInt(data))
        .pipe(z.number()
            .min(1970, { message: 'El año debe ser mayor a 1970' })
            .max(new Date().getFullYear(), { message: 'El año debe ser menor al actual' })),
    vehicleType: z.string().trim().min(1, { message: 'Elige el tipo de vehículo' }),
    comment: z.string().trim().optional(),
    vehicleImage: z.instanceof(FileList)
        .superRefine((data, ctx) => {
            if (data.length == 1) {
                if (!imageAcceptedFileTypes.includes(data[0].type)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "La imagen debe ser png o jpg"
                    })
                }
            }
        })
        .optional()
})


type FormFields = z.infer<typeof schema>

export const VehicleDataForm: React.FC<OnDataChange> = ({
    onDataChange
}) => {

    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({
        defaultValues: {
            location: provinces[0],
            brand: '',
            is4x4: false,
            model: '',
            vehicleType: vehicleType[0],
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        onDataChange("vehicleData", data)
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
            <SubmitButton color="understate" text="CONTINUAR" />
        </form>
    )
}
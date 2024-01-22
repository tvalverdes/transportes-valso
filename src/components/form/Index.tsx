import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod'
import { FormField } from "../form-field/Index";
import { FormSelect } from "../form-select/Index";
import { FormAutocomplete } from "../formAutocomplete/Index";
import { documentType, driversLicenseType } from "@/constants/constants";

const schema = z.object({
    name: z.string().trim()
        .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
        .refine(data => /^[A-Za-z\s]+$/u.test(data), {
            message: 'Este campo solo debe contener letras',
        }),
    documentType: z.string().trim()
        .toUpperCase()
        .regex(/^(DNI|CE)$/, { message: 'El tipo de documento no es válido' }),
    documentNumber: z.string().trim(),
    driversLicenseType: z.string().trim().min(1, { message: 'Elige tu tipo de licencia' }),
    phone: z.string().trim().refine(data => /^\d{9}$/.test(data), {
        message: 'El teléfono debe tener 9 números',
    }),
}).refine(data => data.documentType === 'DNI' ? /^\d{8}$/.test(data.documentNumber) : /^\d{12}$/.test(data.documentNumber), {
    message: 'El número de documento no es válido para el tipo de documento seleccionado',
    path: ['documentNumber'],
})

type FormFields = z.infer<typeof schema>

export const Form = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({
        defaultValues: {
            name: '',
            documentType: documentType[0].label,
            documentNumber: '',
            driversLicenseType: driversLicenseType[0],
            phone: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)

    }
    return (
        <form className="flex flex-col gap-4 w-full max-w-96 my-12 p-2 md:p-6 " onSubmit={handleSubmit(onSubmit)}>
            <FormField name="name" placeholder="Nombre" register={register} type="text" error={errors.name} />
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-4 basis-2/5">
                    <FormSelect name="documentType" register={register} placeholder="Tipo de documento" error={errors.documentType} />
                    <FormAutocomplete name="driversLicenseType" control={control} options={driversLicenseType} placeholder="Tipo de licencia" error={errors.driversLicenseType} />
                </div>
                <div className="flex flex-col gap-4 basis-3/5">
                    <FormField name="documentNumber" placeholder="N° de documento" register={register} type="number" error={errors.documentNumber} />
                    <FormField name="phone" placeholder="Teléfono" register={register} type="tel" error={errors.phone} />
                </div>
            </div>
            <button type="submit">
                click
            </button>
        </form>
    )
}
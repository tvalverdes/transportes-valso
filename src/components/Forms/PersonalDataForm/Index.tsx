import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod'
import { FormField } from "../../FormInputs/FormField/Index";
import { FormSelect } from "../../FormInputs/FormSelect/Index";
import { FormAutocomplete } from "../../FormInputs/FormAutocomplete/Index";
import { documentType, driversLicenseType } from "@/constants/constants";
import { SubmitButton } from '../../SubmitButton/Index';
import { rentVehicleDataState, useFormNumberState } from "@/store/useStore";
import { personalDataSchema } from "@/schema/schemas";

type FormFields = z.infer<typeof personalDataSchema>

export const PersonalDataForm = () => {
    const { data, setPersonalData } = rentVehicleDataState();
    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({
        defaultValues: {
            ...data.personalData
        },
        resolver: zodResolver(personalDataSchema)
    })

    const { goToNextForm } = useFormNumberState();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        setPersonalData(data)
        console.log(data)
        goToNextForm()
    }
    return (
        <form className="flex flex-col gap-4 my-8" onSubmit={handleSubmit(onSubmit)}>
            <FormField name="name" placeholder="Nombre" register={register} type="text" error={errors.name} />
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-4 basis-2/5">
                    <FormSelect name="documentType" currentValue={data.personalData.documentType}  options={documentType} register={register} placeholder="Tipo de documento" error={errors.documentType} />
                    <FormAutocomplete name="driversLicenseType" control={control} options={driversLicenseType} placeholder="Tipo de licencia" error={errors.driversLicenseType} />
                </div>
                <div className="flex flex-col gap-4 basis-3/5">
                    <FormField name="documentNumber" placeholder="N° de documento" register={register} type="number" error={errors.documentNumber} />
                    <FormField name="phone" placeholder="Teléfono" register={register} type="tel" error={errors.phone} />
                </div>
            </div>
            <SubmitButton color="understate" text="CONTINUAR" />
        </form>
    )
}
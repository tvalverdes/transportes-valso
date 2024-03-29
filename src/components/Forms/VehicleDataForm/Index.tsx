/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormSelect } from '@/components/FormInputs/FormSelect/Index';
import { FormTextArea } from "@/components/FormInputs/FormTextArea/Index";
import { FileUpload } from "@/components/file-upload/Index";
import { featurePlaceholder, is4x4Data, provinces, vehicleNames } from "@/constants/constants";
import { vehicleDataSchema } from "@/schema/schemas";
import { rentVehicleDataState, useFormNumberState } from "@/store/useStore";
import { getVehicleTypeAttributes } from '@/utils/dataFilter';
import { createVehicleForm } from '@/utils/requests';
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { FormAutocomplete } from "../../FormInputs/FormAutocomplete/Index";
import { FormField } from "../../FormInputs/FormField/Index";
import { SubmitButton } from '../../SubmitButton/Index';


type FormFields = z.infer<typeof vehicleDataSchema>

export const VehicleDataForm = () => {
    const { goToPreviousForm } = useFormNumberState();
    const { data, setVehicleData, setVehicleType } = rentVehicleDataState();
    console.log(data)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({
        defaultValues: {
            ...data.vehicleData
        },
        resolver: zodResolver(vehicleDataSchema)
    })
    const attributes = getVehicleTypeAttributes(data.vehicleData.vehicleType)

    console.log(data)
    const onSubmit: SubmitHandler<FormFields> = (values) => {
        const verifiedData = verifyImageLength(values)    
        setVehicleData(verifiedData)
        setIsFormSubmitted(true)
    }

    useEffect(() => {
      if (isFormSubmitted && data) {
        console.log(data)
          createVehicleForm(data);
      }
  }, [isFormSubmitted, data]);

    const verifyImageLength = (formValues: FormFields) => {
        if (formValues.vehicleImage?.length == 0) {
            delete formValues.vehicleImage
        }
        return formValues
    }
    console.log(data)

    return (
        <form className="flex flex-col gap-4 my-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-4 basis-2/5">
            <FormAutocomplete name="location" placeholder="Ubicación" control={control} options={provinces} error={errors.location} />
                    <FormField name="brand" register={register} placeholder="Marca" type="text" error={errors.brand} />
                    <FormField name="fabricationYear" placeholder="Año de fabricación" register={register} type="number" error={errors.fabricationYear} />
                      
                </div>
                <div className="flex flex-col gap-4 basis-3/5">
                    <FormField name="model" placeholder="Modelo" register={register} type="text" error={errors.model} />
                    <FormSelect name='is4x4' placeholder='¿Es 4x4?' error={errors.is4x4} register={register} options={is4x4Data} currentValue={data.vehicleData.is4x4} />
                    <FormAutocomplete 
                    name="vehicleType" 
                    control={control} 
                    options={vehicleNames} 
                    placeholder="Tipo de vehículo" error
                    ={errors.vehicleType}
                    onChangeMethod={setVehicleType} />
                </div>
            </div>
            {attributes && attributes.map(([key, value]: any) => (
        <div key={key}>
          <FormAutocomplete 
          control={control}
          name={key}
          options={value}
          placeholder={featurePlaceholder[key]}
           />
        </div>
      ))}
            <FormTextArea name="comment" placeholder="Si deseas, puedes dejar un comentario" register={register} required={false} />
            <FileUpload name="vehicleImage" register={register} error={errors.vehicleImage} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <SubmitButton color="understate" type="button" text="REGRESAR" onClick={goToPreviousForm} />
                <SubmitButton color="primary" type="submit" text="ENVIAR" />
            </div>
        </form>
    )
}
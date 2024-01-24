import { imageAcceptedFileTypes } from "@/constants/constants"
import { z } from "zod"

export const vehicleDataSchema = z.object({
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

export const personalDataSchema = z.object({
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
'use client'

/* import { PersonalDataForm } from "@/components/Forms/PersonalDataForm/Index" */
import { VehicleDataForm } from "@/components/Forms/VehicleDataForm/Index"
import { PersonalDataForm } from "@/components/Forms/PersonalDataForm/Index";
import { useFormNumberState } from "@/store/useStore";

const RegistrarUnidad = () => {

    /* const [formData, setFormData] = useState<VehicleFullForm>(initialData) */
    const { count } = useFormNumberState();

    /* const handleChangeData = (parent: VehicleDataTypes, data: FormPersonalData | FormVehicleData) => {
        setFormData((previousData) => ({
            ...previousData,
            [parent]: {
                ...data
            }
        }))
        console.log(formData)
    } */

    return (
        <main className="bg-understate bg-opacity-80 container mx-auto px-1 flex justify-center">
            <div className="w-full bg-white max-w-[23.8rem] border-2 p-2 md:p-6 my-12 rounded-2xl">
                <h2 className="text-primary text-xl">Registro de vehículo</h2>
                <h3 className="text-understate text-md pt-2">Ingresa tus datos personales</h3>
                {
                    count === 0 ? <PersonalDataForm /> :
                        <VehicleDataForm />
                }


            </div>
        </main>
    )
}

export default RegistrarUnidad
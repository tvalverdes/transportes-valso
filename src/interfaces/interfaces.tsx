import { FormPersonalData, VehicleFullForm } from "@/types/types";
import { FormVehicleData } from '../types/types';

export interface FormNumberState {
    count: number;
    goToNextForm: () => void;
    goToPreviousForm: () => void;
}

export interface VehicleDataState {
    data: VehicleFullForm;
    setPersonalData: (data: FormPersonalData) => void;
    setVehicleData: (data: FormVehicleData) => void;
}
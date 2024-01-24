import { documentType, driversLicenseType } from '@/constants/constants'
import { FormNumberState, VehicleDataState } from '@/interfaces/interfaces'
import { create } from 'zustand'

export const useFormNumberState = create<FormNumberState>((set) => ({
    count: 0,
    goToNextForm: () => set((state) => ({ count: state.count + 1 })),
    goToPreviousForm: () => set((state) => ({ count: state.count - 1 })),
}))

export const rentVehicleDataState = create<VehicleDataState>((set) => ({
    data: {
        personalData: {
            documentNumber: '',
            documentType: documentType[0],
            driversLicenseType: driversLicenseType[0],
            name: '',
            phone: '',
        },
        vehicleData: {
            brand: '',
            comment: '',
            fabricationYear: 2016,
            is4x4: false,
            location: '',
            model: '',
            vehicleType: '',
        }
    },
    setPersonalData: (data) => set((state) => ({ data: { ...state.data, personalData: data } })),
    setVehicleData: (data) => set((state) => ({ data: { ...state.data, vehicleData: data } })),
}))
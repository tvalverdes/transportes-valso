import { documentType, driversLicenseType } from '@/constants/constants'
import { FormNumberState, MenuState, VehicleDataState } from '@/interfaces/interfaces'
import { create } from 'zustand'

export const useFormNumberState = create<FormNumberState>((set) => ({
    count: 1,
    goToNextForm: () => set((state) => ({ count: state.count + 1 })),
    goToPreviousForm: () => set((state) => ({ count: state.count - 1 })),
}))

export const isMenuShowingState = create<MenuState>((set) => ({
    isMenuShowing: false,
    setMenuState: (state) => set({ isMenuShowing: state }),
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
            fabricationYear: "2016",
            is4x4: '',
            location: '',
            model: '',
            vehicleType: '',
            numberOfSeats: '',
            tons: '',
            type: '',
        }
    },
    setPersonalData: (data) => set((state) => ({ data: { ...state.data, personalData: data } })),
    setVehicleData: (data) => set((state) => ({ data: { ...state.data, vehicleData: data } })),
    setVehicleType: (data) => set((state) => ({ data: { ...state.data, vehicleData: { ...state.data.vehicleData, vehicleType: data } } })),
}))
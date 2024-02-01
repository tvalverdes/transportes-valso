import { HTMLProps } from "react"
import { Control, FieldError, UseFormRegister } from "react-hook-form"

export type ActionButtonProps = {
    text: string
    url: string
}

export type Contact = {
    name: string
    content: string
    icon: string
}

export type CompanyData = {
    sectionName: string
    title: string
    description: string
    contactData: Contact[]
    schedule: string[]
}

export type CardProps = {
    image: string
    title: string
    description?: string
    color: Color
}

type Color = "GREEN" | "WHITE"

export type GoalsProps = {
    image: string,
    title: string,
    description: string
}

export type HamburguerButtonProps = {
    method: void;
}

export type ItemsType = {
    name: string
    url: string
    style?: HTMLProps<HTMLElement>["className"];
    to?: string
}

export type SectionDataProps = {
    sectionName: string
    title: string
    description?: string
}

export type Clients = {
    name: string
    image: string
}

export type ContactCard = Omit<CardProps, "color"> & {
    button?: ActionButtonProps
}

export type WorkCard = {
    image: string
    title: string
    button: ActionButtonProps
}

export type TruckValidFieldNames =
    | "name"
    | "documentType"
    | "documentNumber"
    | "driversLicenseType"
    | "phone";

export type FormPersonalData = {
    name: string;
    documentType: string;
    documentNumber: string;
    driversLicenseType: string;
    phone: string;
};

export type VehicleValidFieldNames =
    | "location"
    | "brand"
    | "is4x4"
    | "model"
    | "fabricationYear"
    | "vehicleType"
    | "comment"
    | "vehicleImage"

export type FormVehicleData = {
    location: string
    brand: string
    is4x4: string
    model: string
    fabricationYear: string
    vehicleType: string
    numberOfSeats?: string
    tons?: string
    type?: string
    comment?: string
    vehicleImage?: FileList
}

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: TruckValidFieldNames | VehicleValidFieldNames;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>; //UseFormRegister<FormPersonalData | FormVehicleData>
    error: FieldError | undefined;
    required?: boolean;
};

export type RadioButtonFormat = {
  value: string
  label: string
} 
export type FormRadioButtonProps = Pick<FormFIleProps, "name"|"register"> & {
  options: RadioButtonFormat[]
}


export type VehicleFullForm = {
    personalData: FormPersonalData
    vehicleData: FormVehicleData
}

export type FormFIleProps = Pick<FormFieldProps, "register" | "name" | "error">

export type FormTextAreaProps = Omit<FormFieldProps, "type" | "error">;

export type FormSelectProps = Omit<FormFieldProps, "type"> & {
    currentValue: string
    options: string[];
};

export type FormDropdownProps = {
    name: TruckValidFieldNames | VehicleValidFieldNames
    error: FieldError | undefined
    placeholder: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>
}

export type FormAutocompleteProps = FormDropdownProps & {
    options: string[]
    onChangeMethod?: (value: string) => void
};

export type TruckFeatures = {
  [vehicle: string]: {
    numberOfSeats?: string[]
    tons?: string[]
    type?: string[]
  }
}



export type SubmitButtonProps = {
    onClick?: VoidFunction
    color: "primary" | "understate"
    text: string
    type?: "button" | "submit"
}

export type VehicleDataTypes = "personalData" | "vehicleData"

export type OnDataChange = {
    onDataChange: (parent: VehicleDataTypes, data: FormPersonalData | FormVehicleData) => void
}

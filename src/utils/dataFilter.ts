import { vehicleType } from '@/constants/constants';

export const getVehicleTypeAttributes = (type: string) => {
  const vehicleTypeKeys = Object.keys(vehicleType);

  if (vehicleTypeKeys.includes(type)) {
      const attributes = vehicleType[type];
      const attributeEntries = Object.entries(attributes);
      return attributeEntries
  }

  return null;
}

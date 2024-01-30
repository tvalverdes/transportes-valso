import { VehicleFullForm } from '@/types/types'
import axios from 'axios'

export const createVehicleForm = async (data: VehicleFullForm) => {
  const formData = new FormData()
  const image = data.vehicleData.vehicleImage
  if (image != undefined) {
    formData.append('vehicleImage', image[0])
  }
  formData.append('data', JSON.stringify(data))
  console.log({data})
  try {
    if(!process.env.NEXT_PUBLIC_URL) throw new Error('URL not found')
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/vehicles`, formData)
  .then(res => console.log(res))
  .catch(err => console.log(err))  
  } catch (error) {
    console.log(error)
  }
}
import { FormRadioButtonProps } from '@/types/types'

export const FormRadioButton: React.FC<FormRadioButtonProps> = (
  {
    name,
    register,
    options,
    id
  }
) => {
    return (
      <>
        {
          options.map((option)=> {
            return (
              <div key={option.value} id={id} className='flex gap-2 items-center'>
                <label className='ms-2 text-sm font-medium text-gray-900' htmlFor={option.value}>{option.label}</label>
                <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2' type="radio" value={option.value} {...register(name)} />
              </div>
              
              )
            })
          }
          </>
    )
}
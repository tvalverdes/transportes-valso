import { FormFIleProps } from "@/types/types";


export const FileUpload: React.FC<FormFIleProps> = (
    {
        name,
        register,
        error
    }
) => {

    return (
        <>
            <div>

                <label
                    className="mb-2 inline-block text-neutral-600" htmlFor="formFile">Imagen del vehículo</label>
                <input
                    className={`relative m-0 block w-full min-w-0 flex-auto rounded border border-solid ${error?.message ? 'border-[#D32F2F]' : 'border-neutral-300'} bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  text-neutral-500 file:bg-neutral-700 file:text-neutral-100 focus:border-primary`}
                    type="file"
                    id="formFile"
                    accept='.jpeg, .jpg, .png'
                    {...register(name)}
                     />
                {error?.message && (<p className="text-[#D32F2F] text-xs roboto">{error.message}</p>)}

            </div>

        </>
    )
}

export const convertToBase64 = (file: FileList | undefined) => {
  if (!file) return
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file[0])
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })    
}
/* 
export const convertImageToBinary = async (imageObject) => {
  const file = imageObject[0];

  if (file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsArrayBuffer(file);
    });
  }

  return null;
}; */
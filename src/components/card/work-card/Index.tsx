import { WorkCard as WorkCardProps } from '@/types/types';
import { ActionButton } from '../../ActionButton/Index';
export const WorkCard = ({ ...data }: WorkCardProps) => {

    return (
        <div className="faded bg-cover h-auto w-4/5" style={{ backgroundImage: `url(/images/work${data.image})` }}>
            <div className='flex flex-col h-[32rem] text-white items-center gap-4 pb-8 px-2 justify-end'>
                <p className='text-2xl text-center'>{data.title}</p>
                <ActionButton text={data.button.text} url={data.button.url} />
            </div>
        </div>
    )
}
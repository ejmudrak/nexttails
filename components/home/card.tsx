import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export interface CardProps {
  title: string;
  description: string;
  image: string | null;
  color: string;
}

export default function Card({ title, description, image, color }: CardProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='align-center relative flex h-40 w-40 justify-center overflow-hidden rounded-3xl bg-slate-100 p-5'>
        <div
          className={`absolute left-[-24px] top-14 h-[320px] w-[320px] overflow-hidden rounded-full`}
          style={{
            backgroundColor: color,
          }}
        />

        {image && (
          <Image
            alt='cocktail'
            src={`/${image}`}
            width={120}
            height={120}
            className='z-10'
          />
        )}
      </div>

      <div className='pl-4'>
        <p className='font-xs font-medium'>{title}</p>
        <p className='font-xs font-regular text-slate-500'>{description}</p>
      </div>
    </div>
  );
}

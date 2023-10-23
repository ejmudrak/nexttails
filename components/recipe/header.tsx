import Image from 'next/image';

export interface HeaderProps {
  image: string;
  color: string;
}

export default function Header({ image, color }: HeaderProps) {
  return (
    <div className='relative top-0'>
      <div
        className={`absolute left-[-64px] top-14 h-[780px] w-[780px] overflow-hidden rounded-b-none rounded-t-full`}
        style={{
          backgroundColor: color,
        }}
      />

      <Image
        className='relative bottom-6 m-auto'
        alt='cocktail'
        src={`/${image}`}
        width={280}
        height={280}
      />
    </div>
  );
}

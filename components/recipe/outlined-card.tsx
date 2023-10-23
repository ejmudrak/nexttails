interface OutlinedCardProps {
  title: string;
  label: string;
}

export default function OutlinedCard({ title, label }: OutlinedCardProps) {
  return (
    <div className='rounded-xl border-[1px] p-3'>
      <p className='text-md font-semibold'>{title}</p>
      <p className='text-md text-slate-500'>{label}</p>
    </div>
  );
}

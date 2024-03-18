export default function Chip({
  label,
  variant = 'outlined',
  color = 'black',
}: {
  label: string;
  variant?: 'outlined' | 'filled';
  color?: string;
}) {
  const variantStyles =
    variant === 'outlined'
      ? `border border-[${color}] bg-white`
      : `bg-[${color}] text-white`;

  return (
    <div className={`rounded-full px-4 py-1 ${variantStyles}`}>{label}</div>
  );
}

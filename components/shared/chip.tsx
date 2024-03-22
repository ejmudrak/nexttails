export default function Chip({
  label,
  variant = 'outlined',
  color = 'black',
}: {
  label: string;
  variant?: 'outlined' | 'filled';
  color?: string;
}) {
  return (
    <div
      className={`rounded-full px-4 py-1 ${variant === 'outlined' && 'border'}`}
      style={{
        backgroundColor: variant === 'outlined' ? 'white' : color,
        borderColor: variant === 'outlined' ? color : 'none',
        color: 'black',
      }}
    >
      {label}
    </div>
  );
}

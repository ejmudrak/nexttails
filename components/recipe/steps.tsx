import { Step } from '@prisma/client';

export interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  return (
    <>
      <p className='mb-2 pt-4 text-xl font-semibold'>Directions</p>

      <ol className='list-inside list-decimal'>
        {steps.map((step) => (
          <li key={step.id} className='text-slate-600'>
            {step.description}
          </li>
        ))}
      </ol>
    </>
  );
}

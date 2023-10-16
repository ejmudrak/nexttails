import { recipes } from '@/app/page';

export default function Recipes({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id?.toString() === params.id);

  return (
    <div className='z-10 w-full max-w-xl px-5 xl:px-0'>
      <p className='text-3xl font-bold'>{recipe?.name}</p>
      <p className='pt-2'>{recipe?.description}</p>

      <p className='pt-4 text-xl font-semibold'>Ingredients</p>
      <ul className='list-inside list-disc'>
        {recipe?.ingredients.map((ingredient) => (
          <li key={ingredient.name} className='flex flex-row justify-between'>
            <span>{ingredient.name}</span>
            <span>
              {ingredient.amount} {ingredient.unit}
            </span>
          </li>
        ))}
      </ul>

      <p className='pt-4 text-xl font-semibold'>How To Make It</p>
      <ol className='list-inside list-decimal'>
        {recipe?.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

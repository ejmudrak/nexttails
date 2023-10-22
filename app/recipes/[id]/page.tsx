import { unitsMap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { Unit } from '@prisma/client';
import Image from 'next/image';

const getRecipe = async (recipeId: string) => {
  return await prisma.recipe.findFirst({
    where: { id: parseInt(recipeId) },
    include: {
      ingredients: true,
      steps: true,
      glass: true,
    },
  });
};

export default async function Recipes({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  return (
    <div className='z-10 w-full max-w-xl px-5 xl:px-0'>
      {recipe?.image && (
        <Image
          alt='cocktail'
          src={`/${recipe.image}`}
          width={200}
          height={200}
        />
      )}
      <p className='text-3xl font-bold'>{recipe?.name}</p>
      <p className='pt-2'>{recipe?.description}</p>

      <p className='pt-4 text-xl font-semibold'>Ingredients</p>
      <ul className='list-inside list-disc'>
        {recipe?.ingredients.map((ingredient) => (
          <li key={ingredient.id} className='flex flex-row justify-between'>
            <span>{ingredient.name}</span>

            <span>
              {ingredient.amount}{' '}
              {getUnitLabel(ingredient.amount, ingredient.unit)}
            </span>
          </li>
        ))}
      </ul>

      <p className='pt-4 text-xl font-semibold'>How To Make It</p>
      <ol className='list-inside list-decimal'>
        {recipe?.steps.map((step) => (
          <li key={step.id}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
}

const getUnitLabel = (amount: number, unit: Unit) => {
  let label = unitsMap[unit].name;

  // makes units plural
  return amount > 1 ? label + unitsMap[unit].plural : label;
};

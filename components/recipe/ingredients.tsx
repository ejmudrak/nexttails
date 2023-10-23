import { unitsMap } from '@/lib/constants';
import { Ingredient, Unit } from '@prisma/client';

export interface IngredientsProps {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <>
      <p className='mb-2 pt-4 text-xl font-semibold'>Ingredients</p>

      <ul className='list-inside list-disc'>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className='flex flex-row justify-between text-slate-600'
          >
            <span>{ingredient.name}</span>

            <span>
              {ingredient.amount}{' '}
              {getUnitLabel(ingredient.amount, ingredient.unit)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

const getUnitLabel = (amount: number, unit: Unit) => {
  let label = unitsMap[unit].name;

  // makes units plural
  return amount > 1 ? label + unitsMap[unit].plural : label;
};

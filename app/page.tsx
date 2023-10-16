import Card from '@/components/home/card';
import { DEPLOY_URL } from '@/lib/constants';
import { Github, Twitter } from '@/components/shared/icons';
import WebVitals from '@/components/home/web-vitals';
import ComponentGrid from '@/components/home/component-grid';
import Image from 'next/image';
import { nFormatter } from '@/lib/utils';

export default async function Home() {
  return (
    <>
      <div className='z-10 w-full max-w-xl px-5 xl:px-0'>
        <p className='text-2xl font-semibold'>Home</p>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <a href={`recipes/${recipe.id}`}>{recipe.name}</a>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const recipes = [
  {
    id: 1,
    name: 'Old Fashioned',
    description:
      'The old fashioned is a classic cocktail that was invented in Louisville, KY. You can make it with bourbon, rye, or a blended whiskey. You can also substitute one sugar cube for the simple syrup.',
    ingredients: [
      {
        name: 'Bourbon',
        amount: 2,
        unit: 'oz',
      },
      {
        name: 'Orange Bitters',
        amount: 2,
        unit: 'dash',
      },
      {
        name: 'Aromatic Bitters',
        amount: 2,
        unit: 'dash',
      },
      {
        name: 'Simple syrup',
        amount: 1,
        unit: 'tsp',
      },
      {
        name: 'Cherry',
        amount: 1,
        unit: 'none',
      },
      {
        name: 'Orange wedge',
        amount: 1,
        unit: 'none',
      },
    ],
    steps: [
      'Fill a glass half full of ice',
      'Add bourbon, bitters, and simple syrup',
      'Stir to combine',
      'Garnish with cherry and orange wedge',
    ],
  },
];

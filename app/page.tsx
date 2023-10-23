import Card from '@/components/home/card';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import Nav from '@/components/layout/nav';
import { difficultyMap } from '@/lib/constants';

const getRecipes = async () => {
  return await prisma.recipe.findMany({
    include: {
      glass: true,
      steps: true,
      ingredients: true,
    },
  });
};

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <>
      <Nav />

      <div className='z-10 mt-4 w-full max-w-xl'>
        <div className='flex flex-row flex-wrap gap-5 p-6'>
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`recipes/${recipe.id}`}>
              <Card
                title={recipe.name}
                description={`${difficultyMap[recipe.difficulty]} • ${
                  recipe.ingredients.length
                } ing.`}
                image={recipe.image}
                color={recipe.color}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

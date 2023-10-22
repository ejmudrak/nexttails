import Card from '@/components/home/card';
import prisma from '@/lib/prisma';

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
      <div className='z-10 w-full max-w-xl'>
        <div className='flex flex-row flex-wrap gap-5 p-6'>
          {recipes.map((recipe: any) => (
            <a key={recipe.id} href={`recipes/${recipe.id}`}>
              <Card
                title={recipe.name}
                description={'Description'}
                image={recipe.image}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

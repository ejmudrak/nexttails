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
      <div className='z-10 w-full max-w-xl px-5 xl:px-0'>
        <p className='text-2xl font-semibold'>Home</p>
        <ul>
          {recipes.map((recipe: any) => (
            <li key={recipe.id}>
              <a href={`recipes/${recipe.id}`}>{recipe.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

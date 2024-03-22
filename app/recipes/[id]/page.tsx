import BackButton from '@/components/layout/back-button';
import Header from '@/components/recipe/header';
import Ingredients from '@/components/recipe/ingredients';
import OutlinedCard from '@/components/recipe/outlined-card';
import Steps from '@/components/recipe/steps';
import Tools from '@/components/recipe/tools';
import Chip from '@/components/shared/chip';
import { difficultyMap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import Image from 'next/image';

const getRecipe = async (recipeId: string) => {
  return await prisma.recipe.findFirst({
    where: { id: parseInt(recipeId) },
    include: {
      ingredients: true,
      steps: true,
      glass: true,
      tools: true,
      tags: true,
    },
  });
};

export default async function Recipes({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  return (
    <div className='w-full max-w-xl overflow-y-auto overflow-x-hidden pt-8 md:overflow-visible md:pt-16'>
      <BackButton href='/' />

      {recipe && (
        <>
          {/* <div className='absolute left-4 top-20 z-10'>
            <Image
              src='/svg/blob1.svg'
              alt=''
              width={80}
              height={80}
              className='cursor-pointer'
            />
          </div>
          <div className='absolute left-10 top-40 z-10'>
            <Image
              src='/svg/blob2.svg'
              alt=''
              width={80}
              height={80}
              className='cursor-pointer'
            />
          </div> */}

          {recipe.image && <Header image={recipe.image} color={recipe.color} />}

          <div className='relative h-32 rounded-t-[48px] bg-slate-100 px-12 py-4'>
            <p className='text-2xl font-semibold'>{recipe?.name}</p>
          </div>

          <div className='relative top-[-68px] rounded-t-[48px] bg-white px-12 pb-[200px] pt-6'>
            <div className='flex flex-row flex-wrap items-center gap-2'>
              {recipe?.tags.map((tag) => (
                <Chip
                  key={tag.id}
                  label={tag.name}
                  color={recipe.color}
                  variant='filled'
                />
              ))}
            </div>

            <div className='mt-4 flex flex-row items-center gap-4'>
              <OutlinedCard title='Glass' label={recipe.glass.name} />
              <OutlinedCard
                title='Difficulty'
                label={difficultyMap[recipe.difficulty]}
              />
            </div>

            <Ingredients ingredients={recipe.ingredients} />

            {recipe?.tools.length > 0 && <Tools tools={recipe.tools} />}

            <Steps steps={recipe.steps} />
          </div>
        </>
      )}
    </div>
  );
}

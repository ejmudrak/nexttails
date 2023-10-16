import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const recipes = await prisma.recipe.findMany({
    include: {
      glass: true,
      steps: true,
      ingredients: true,
    },
  });

  console.log('recipes: ', recipes);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // add glass records
  await prisma.glass.createMany({
    data: [
      {
        name: 'Cocktail',
        description: '',
      },
      {
        name: 'Wine',
        description: '',
      },
      {
        name: 'Rocks',
        description: '',
      },
      {
        name: 'Pint',
        description: '',
      },
      {
        name: 'Highball',
        description: '',
      },
      {
        name: 'Margarita',
        description: '',
      },
      {
        name: 'Copper Mug',
        description: '',
      },
      {
        name: 'Flute',
        description: '',
      },
      {
        name: 'Tiki',
        description: '',
      },
      {
        name: 'Hurricane',
        description: '',
      },
    ],
    skipDuplicates: true,
  });

  // adds recipes
  await prisma.recipe.create({
    data: {
      name: 'Old Fashioned',
      description: '',
      steps: {
        create: [
          { description: 'Add bourbon, bitters, and simple syrup to glass' },
          { description: 'Fill glass half-full with ice' },
          { description: 'Mix to stir' },
          { description: 'Garnish with cherry and orange wedge' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Bourbon', amount: 2, unit: 'OUNCE' },
          { name: 'Orange Bitters', amount: 2, unit: 'DASH' },
          { name: 'Aromatic Bitters', amount: 2, unit: 'DASH' },
          { name: 'Simple Syrup', amount: 1, unit: 'TEASPOON' },
          { name: 'Cherry', amount: 1, unit: 'NONE' },
          { name: 'Orange Twist', amount: 1, unit: 'NONE' },
        ],
      },
      glassId: 3,
    },
  });
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

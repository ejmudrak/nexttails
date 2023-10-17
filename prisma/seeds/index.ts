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
      difficulty: 'EASY',
      image: 'old-fashioned.png',
      steps: {
        create: [
          { description: 'Add bourbon, bitters, and simple syrup to glass' },
          { description: 'Fill glass half-full with ice' },
          { description: 'Mix to stir' },
          { description: 'Garnish with cherry and orange twist' },
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

  await prisma.recipe.create({
    data: {
      name: 'Sidecar',
      description: '',
      difficulty: 'EASY',
      image: 'sidecar.png',
      tools: {
        create: [
          {
            name: 'Cocktail Shaker',
          },
        ],
      },
      steps: {
        create: [
          {
            description:
              'Add brandy, liqueur, and lemon juice to cocktail shaker, then fill with ice',
          },
          {
            description: 'Shake mixture until chilled and combined, 15 seconds',
          },
          { description: 'Strain cocktail into glass' },
          { description: 'Garnish with lemon twist' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Brandy', amount: 1.5, unit: 'OUNCE' },
          { name: 'Orange Liqueur', amount: 1, unit: 'OUNCE' },
          { name: 'Lemon Juice', amount: 0.75, unit: 'OUNCE' },
          { name: 'Lemon Twist', amount: 1, unit: 'NONE' },
        ],
      },
      glassId: 3,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Negroni',
      description: '',
      difficulty: 'EASY',
      image: 'negroni.png',
      tools: {
        create: [
          {
            name: 'Cocktail Shaker',
          },
        ],
      },
      steps: {
        create: [
          {
            description:
              'Add gin, campari, and vermouth to cocktail shaker, then fill 1/2 full with ice',
          },
          {
            description:
              'Stir until mixture is combined and chilled, about 15 seconds',
          },
          { description: 'Strain into rocks glass 1/2 full with ice' },
          { description: 'Garnish with orange peel' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Gin', amount: 1, unit: 'OUNCE' },
          { name: 'Campari', amount: 1, unit: 'OUNCE' },
          { name: 'Sweet Vermouth', amount: 1, unit: 'OUNCE' },
          { name: 'Strip of orange peel', amount: 1, unit: 'NONE' },
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

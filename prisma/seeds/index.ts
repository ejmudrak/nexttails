import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // add glass records
  await prisma.glass.createMany({
    data: [
      {
        name: 'Martini',
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
        name: 'Lowball',
        description: '',
      },
      {
        name: 'Pint',
        description: '',
      },
      {
        name: 'Highball',
        description: 'or, Collins',
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
      {
        name: 'Coupe',
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
      image: 'old-fashioned.png',
      color: '#DD845E',
      difficulty: 'EASY',
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
      tags: {
        create: [
          { name: 'Bourbon' },
          { name: 'Rich' },
          { name: 'Dark' },
          { name: 'Boozy' },
          { name: 'Caramel' },
          { name: 'Baking Spices' },
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
      color: '#FAC475',
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
      color: '#EE5F5F',
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

  await prisma.recipe.create({
    data: {
      name: 'Gin & Tonic',
      description: '',
      image: 'gin-and-tonic.png',
      color: '#86E5AC',
      difficulty: 'EASY',
      steps: {
        create: [
          { description: 'Fill a highball glass with ice, then add gin' },
          { description: 'Top glass with tonic water' },
          { description: 'Gently stir to mix' },
          { description: 'Garnish with lime wheels or wedges' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Gin', amount: 2, unit: 'OUNCE' },
          { name: 'Tonic water', amount: 4, unit: 'OUNCE' },
          { name: 'Lime wheel', amount: 2, unit: 'NONE' },
        ],
      },
      glassId: 5,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Gold Rush',
      description: '',
      image: 'gold-rush.png',
      color: '#F6C65D',
      difficulty: 'EASY',
      steps: {
        create: [
          {
            description:
              'Add bourbon, honey syrup, and lemon juice into an ice-filled shaker',
          },
          { description: 'Shake to chill and combine' },
          { description: 'Strain into rocks glass with ice' },
          { description: 'Garnish with lemon' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Bourbon', amount: 2, unit: 'OUNCE' },
          { name: 'Lemon juice', amount: 0.75, unit: 'OUNCE' },
          { name: 'Honey syrup', amount: 0.75, unit: 'OUNCE' },
          { name: 'Lemon twist', amount: 0.75, unit: 'NONE' },
        ],
      },
      glassId: 5,
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

import { PrismaClient } from '@prisma/client';

export default async function seedBaseRecipes(prisma: PrismaClient) {
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
          { name: 'Sweet' },
        ],
      },
      glassId: 4,
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
              'Add cognac, liqueur, and lemon juice to cocktail shaker, then fill with ice',
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
          { name: 'Cognac', amount: 1.5, unit: 'OUNCE' },
          { name: 'Orange Liqueur', amount: 1, unit: 'OUNCE' },
          { name: 'Lemon Juice', amount: 0.75, unit: 'OUNCE' },
          { name: 'Lemon Twist', amount: 1, unit: 'NONE' },
        ],
      },
      tags: {
        create: [
          { name: 'Cognac' },
          { name: 'Light' },
          { name: 'Bright' },
          { name: 'Citrus' },
          { name: 'Sweet' },
        ],
      },
      glassId: 12,
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
      tags: {
        create: [
          { name: 'Gin' },
          { name: 'Bitter' },
          { name: 'Sweet' },
          { name: 'Complex' },
          { name: 'Herbal' },
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
      tags: {
        create: [
          { name: 'Gin' },
          { name: 'Light' },
          { name: 'Bright' },
          { name: 'Bitter' },
          { name: 'Herbal' },
        ],
      },
      glassId: 6,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Gold Rush',
      description: '',
      image: 'gold-rush.png',
      color: '#F6C65D',
      difficulty: 'EASY',
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
          {
            name: 'Honey syrup',
            amount: 0.75,
            unit: 'OUNCE',
          },
          { name: 'Lemon twist', amount: 0.75, unit: 'NONE' },
        ],
      },
      tags: {
        create: [
          { name: 'Bourbon' },
          { name: 'Light' },
          { name: 'Bright' },
          { name: 'Honey' },
          { name: 'Citrus' },
        ],
      },
      glassId: 4,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Aperol Spritz',
      description: '',
      image: 'aperol-spritz.png',
      color: '#FF8557',
      difficulty: 'EASY',
      steps: {
        create: [
          {
            description: 'Fill a large wine glass with ice',
          },
          { description: 'Pour Aperol over ice' },
          { description: 'Add Prosecco to glass' },
          { description: 'Top off with splash of soda water' },
          { description: 'Give it a stir' },
          { description: 'Garnish with orange slice' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Aperol', amount: 2, unit: 'OUNCE' },
          { name: 'Prosecco', amount: 3, unit: 'OUNCE' },
          {
            name: 'Splash of club soda',
            amount: 1,
            unit: 'NONE',
          },
          { name: 'Orange slice', amount: 1, unit: 'NONE' },
        ],
      },
      tags: {
        create: [
          { name: 'Fizzy' },
          { name: 'Light' },
          { name: 'Bitter' },
          { name: 'Sweet' },
        ],
      },
      glassId: 2,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Moscow Mule',
      description: '',
      image: 'moscow-mule.png',
      color: '#DDF08E',
      difficulty: 'EASY',
      steps: {
        create: [
          {
            description: 'Fill copper mug with ice',
          },
          { description: 'Add vodka and lime juice' },
          { description: 'Top off with ginger beer' },
          { description: 'Give it a stir' },
          { description: 'Garnish with lime wedge' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Vodka', amount: 2, unit: 'OUNCE' },
          { name: 'Lime juice (half a lime)', amount: 0.5, unit: 'OUNCE' },
          {
            name: 'Ginger beer',
            amount: 4,
            unit: 'OUNCE',
          },
          { name: 'Lime wedge', amount: 1, unit: 'NONE' },
        ],
      },
      tags: {
        create: [
          { name: 'Vodka' },
          { name: 'Fizzy' },
          { name: 'Ginger' },
          { name: 'Citrus' },
          { name: 'Sweet' },
        ],
      },
      glassId: 8,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Boulevardier',
      description: '',
      image: 'boulevardier.png',
      color: '#FF7855',
      difficulty: 'EASY',
      tools: {
        create: [
          {
            name: 'Mixing glass',
          },
        ],
      },
      ingredients: {
        create: [
          { name: 'Bourbon', amount: 1.5, unit: 'OUNCE' },
          { name: 'Sweet Vermouth', amount: 1, unit: 'OUNCE' },
          { name: 'Aperol', amount: 1, unit: 'OUNCE' },
          { name: 'Orange twist', amount: 1, unit: 'NONE' },
        ],
      },
      steps: {
        create: [
          {
            description: 'Fill a mixing glass with ice',
          },
          { description: 'Pour bourbon, vermouth, and Aperol into glass' },
          { description: 'Stir for 30 seconds' },
          { description: 'Strain into glass' },
          { description: 'Garnish with orange twist' },
        ],
      },
      tags: {
        create: [
          { name: 'Bourbon' },
          { name: 'Bitter' },
          { name: 'Sweet' },
          { name: 'Rich' },
        ],
      },
      glassId: 12,
    },
  });
}

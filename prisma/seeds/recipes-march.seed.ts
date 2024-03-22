import { PrismaClient } from '@prisma/client';

export default async function seedMarchRecipes(prisma: PrismaClient) {
  await prisma.recipe.create({
    data: {
      name: 'Vieux Mot',
      description: '',
      image: 'vieux-mot.png',
      color: '#fcdb60',
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
          { description: 'Fill cocktail shaker with ice' },
          {
            description:
              'Add gin, elderflower liqueur, lemon juice, and simple',
          },
          { description: 'Give it a good shake' },
          { description: 'Strain into glass' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Gin', amount: 1.5, unit: 'OUNCE' },
          { name: 'Lemon juice', amount: 0.75, unit: 'OUNCE' },
          { name: 'Elderflower liqueur', amount: 0.5, unit: 'OUNCE' },
          { name: 'Simple Syrup', amount: 0.5, unit: 'OUNCE' },
        ],
      },
      tags: {
        create: [
          { name: 'Gin' },
          { name: 'Bright' },
          { name: 'Tart' },
          { name: 'Citrus' },
        ],
      },
      glassId: 12,
    },
  });

  await prisma.recipe.create({
    data: {
      name: 'Manhattan',
      description: '',
      image: 'manhattan.png',
      color: '#b8564d',
      difficulty: 'EASY',
      tools: {
        create: [
          {
            name: 'Mixing glass',
          },
        ],
      },
      steps: {
        create: [
          { description: 'Fill mixing glass with ice' },
          {
            description: 'Add whiskey, vermouth, and bitters to mixing glass',
          },
          { description: 'Give it a good stir' },
          { description: 'Strain into glass' },
        ],
      },
      ingredients: {
        create: [
          { name: 'Rye whiskey', amount: 2, unit: 'OUNCE' },
          { name: 'Sweet vermouth', amount: 1, unit: 'OUNCE' },
          { name: 'Angostura bitters', amount: 2, unit: 'DASH' },
          { name: 'Maraschino cherry', amount: 1, unit: 'OUNCE' },
        ],
      },
      tags: {
        create: [
          { name: 'Bourbon' },
          { name: 'Whiskey' },
          { name: 'Rich' },
          { name: 'Boozy' },
          { name: 'Complex' },
        ],
      },
      glassId: 1,
    },
  });
}

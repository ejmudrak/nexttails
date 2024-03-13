import { PrismaClient } from '@prisma/client';

export default async function seedGlasses(prisma: PrismaClient) {
  // add glass records
  await prisma.glass.createMany({
    data: [
      {
        // id 1
        name: 'Martini',
        description: '',
      },
      {
        // id 2
        name: 'Wine',
        description: '',
      },
      {
        // id 3
        name: 'Rocks',
        description: '',
      },
      {
        // id 4
        name: 'Lowball',
        description: '',
      },
      {
        // id 5
        name: 'Pint',
        description: '',
      },
      {
        // id 6
        name: 'Highball',
        description: 'or, Collins',
      },
      {
        // id 7
        name: 'Margarita',
        description: '',
      },
      {
        // id 8
        name: 'Copper Mug',
        description: '',
      },
      {
        // id 9
        name: 'Flute',
        description: '',
      },
      {
        // id 10
        name: 'Tiki',
        description: '',
      },
      {
        // id 11
        name: 'Hurricane',
        description: '',
      },
      {
        // id 12
        name: 'Coupe',
        description: '',
      },
    ],
    skipDuplicates: true,
  });
}

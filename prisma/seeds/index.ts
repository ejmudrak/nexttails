import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Change this to a specific seed file name to run only that seed
const SEED_FILE_NAME = '.seed.ts';

async function main() {
  // add path for seed files
  const seedFilesPath = path.join(__dirname);

  const seedFiles = fs
    .readdirSync(seedFilesPath)
    .filter((file: string) => file.endsWith(SEED_FILE_NAME));

  for (const seedFile of seedFiles) {
    const seedFilePath = path.join(seedFilesPath, seedFile);
    const { default: seedFunction } = require(seedFilePath);
    await seedFunction(prisma);
  }
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

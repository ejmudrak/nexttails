import { Unit } from '@prisma/client';

type UnitMapRecord = {
  name: string;
  abbreviation: string;
  plural: string;
};

export const unitsMap: Record<Unit, UnitMapRecord> = {
  OUNCE: {
    name: 'ounce',
    abbreviation: 'oz',
    plural: 's',
  },
  CUP: {
    name: 'cup',
    abbreviation: 'cup',
    plural: 's',
  },
  TEASPOON: {
    name: 'teaspoon',
    abbreviation: 'tsp',
    plural: 's',
  },
  TABLESPOON: {
    name: 'tablespoon',
    abbreviation: 'tbsp',
    plural: '',
  },
  DASH: {
    name: 'dash',
    abbreviation: 'dash',
    plural: 'es',
  },
  NONE: {
    name: '',
    abbreviation: '',
    plural: '',
  },
};

export const difficultyMap = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};

import { getObjectSeeds } from './gameObjects';

export const dummyObjects = [
  {
    id: 1,
    baseType: 0,
    gameEngineLayer: 0,
    title: 'Stairs - Up',
    character: '<',
    isPassable: true,
    dataTemplate: {
      goToLevelId: 1,
    },
  },
  {
    id: 2,
    baseType: 0,
    gameEngineLayer: 0,
    title: 'Stairs - Down',
    character: '>',
    isPassable: true,
    dataTemplate: {
      goToLevelId: 2,
    },
  },
];

export const dummyLevelData = [
  {
    id: 1,
    title: 'Level 1',
  },
  {
    id: 2,
    title: 'Level 2',
  },
  {
    id: 3,
    title: 'Level 3',
  },
  {
    id: 4,
    title: 'Level 4',
  },
  {
    id: 5,
    title: 'Level 5',
  },
  {
    id: 6,
    title: 'Level 6',
  },
];
export const dummyGameData = [
  {
    id: 1,
    title: 'Adventure Game',
    description:
      'Go on an epic adventure to find the epic item of epicness to become a legend.',
    lastViewedLevel: {
      id: 1,
    },
    gameObjects: getObjectSeeds(),
    // [
    // {
    //   id: 1,
    //   title: 'Stairs - Up',
    //   character: '<',
    // },
    // {
    //   id: 2,
    //   title: 'Stairs - Down',
    //   character: '>',
    // },
    // ],
    levels: [...dummyLevelData],
  },
  {
    id: 2,
    title: 'Amazing Game',
    description: 'An amazing game full of wonder and bliss.',
    lastViewedLevel: null,
  },
  {
    id: 3,
    title: 'Amazing Game 2',
    description: 'A second amazing game full of wonder and bliss.',
    lastViewedLevel: {
      id: 2,
    },
  },
  {
    id: 4,
    title: 'Dungeons of Death',
    description: "Death is everywhere. Don't die!",
    lastViewedLevel: {
      id: 4,
    },
  },
  {
    id: 5,
    title: 'Dungeons of Death 2',
    description: "Death is STILL everywhere. Don't die!",
    lastViewedLevel: {
      id: 2,
    },
  },
  {
    id: 6,
    title: 'Great Game',
    description: 'Such a great game',
    lastViewedLevel: {
      id: 3,
    },
  },
];

import { UserInputError } from 'apollo-server-errors';
import { gameMutations, gameQueries } from './game';
import gameLevelQueries from './gameLevel/queries';
import { itemTypeMutations, itemTypeQueries } from './itemType';
import { userMutations, userQueries } from './user';
import { itemMutations, itemQueries } from './item';
import { levelMutations, levelQueries } from './level';
import { gameLevelMutations } from './gameLevel';

const resolvers = {
  Query: {
    ...userQueries,
    ...gameQueries,
    ...gameLevelQueries,
    ...itemQueries,
    ...itemTypeQueries,
    ...levelQueries,
  },
  Mutation: {
    ...userMutations,
    ...gameMutations,
    ...gameLevelMutations,
    ...itemMutations,
    ...itemTypeMutations,
    ...levelMutations,
  },
};

export default resolvers;

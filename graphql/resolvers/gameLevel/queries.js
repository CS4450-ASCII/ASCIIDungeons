import { GameLevel } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const gameLevelQueries = {
  gameLevels: async (_, args) => {
    const gameLevels = await GameLevel.findAll();

    return gameLevels;
  },

  gameLevel: async (obj, args, context, info) => {
    const gameLevel = await GameLevel.findOne({ where: { id: args.id } });

    return gameLevel;
  }
};

export default gameLevelQueries;
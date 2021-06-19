import { GameLevel } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const gameLevelQueries = {
  games: async (_, args) => {
    const gameLevels = await GameLevel.find();

    return gameLevels;
  },

  game: async (_, {id}) => {
    const gameLevel = await GameLevel.findById(id);

    return gameLevel;
  }
};

export default gameLevelQueries;
import { Game } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const gameQueries = {
  games: async (_, args) => {
    const games = await Game.find();

    return games;
  },

  game: async (_, {id}) => {
    const game = await Game.findById(id);

    return game;
  }
};

export default gameQueries;
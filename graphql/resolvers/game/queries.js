import { Game } from '../../../database/models';

const gameQueries = {
  games: async (parent, args, { currentUser }, info) => {
    const games = await Game.findAll();
    return games;
  },

  game: async (parent, { id }, { currentUser }, info) => {
    const game = await Game.findByPk(id);
    return game;
  },
};

export default gameQueries;

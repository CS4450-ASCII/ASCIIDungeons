import { Game } from '../../../database/models';

const gameQueries = {
  games: async (_, args) => {
    const games = await Game.findAll();

    return games;
  },

  game: async (obj, args, context, info) => {
    const game = await Game.findOne({ where: { id: args.id }});

    return game;
  }
};

export default gameQueries;
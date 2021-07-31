import { Game } from '../../../database/models';

const gameQueries = {
  games: async (parent, { filter }, { currentUser }, info) => {
    let options;
    switch (filter) {
      case 'all':
        break;
      default:
        options = { where: { createdById: currentUser.id } };
        break;
    }
    const games = await Game.findAll(options);
    return games;
  },

  game: async (parent, { id }, { currentUser }, info) => {
    const game = await Game.findByPk(id);
    return game;
  },
};

export default gameQueries;

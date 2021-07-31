import { Game, Level } from '../../../database/models';

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
    const game = await Game.findByPk(id, {
      include: { model: Level, as: 'levels' },
    });
    return game;
  },
};

export default gameQueries;

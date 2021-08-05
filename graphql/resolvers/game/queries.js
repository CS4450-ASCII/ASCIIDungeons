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
    const games = await Game.findAll({
      ...options,
      include: { all: true, include: { all: true } },
    });
    return games;
  },

  game: async (parent, { id }, { currentUser }, info) => {
    const game = await Game.findByPk(id, {
      include: { all: true, include: { all: true } },
    });
    return game;
  },

  gameContext: async (
    parent,
    { gameId, levelIndex = 0 },
    { currentUser },
    info,
  ) => {
    const currentGame = await Game.findByPk(gameId, {
      include: { all: true, include: { all: true } },
    });
    const currentLevel = currentGame.levels[levelIndex];

    // TODO: Store the lastViewed level id as part of the game,
    // so it can be used if the levelIndex is not provided.
    // game.update({ lastViewedLevelId: levelId });
    return { currentGame, currentLevel };
  },
};

export default gameQueries;

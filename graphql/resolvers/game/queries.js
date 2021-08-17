import _ from 'lodash';
import { Op } from 'sequelize';
import { Game } from '../../../database/models';

/**
 * Converts the filter object to one that uses the
 * Sequelize Op symbols instead of regular keys.
 * (e.g converts iRegexp to Op.iRegexp.)
 *
 * { isPublished: true, iRegexp: 'a' } becomes
 * { isPublished: true, [Op.iRegexp]: 'a' }
 *
 * @param {object} filter The filter object to convert
 * @returns Converted object
 */
function opSwap(filter) {
  return _.reduce(
    filter,
    (acc, val, key) => {
      if (_.isObject(val)) {
        acc[Op[key] || key] = opSwap(val);
      } else {
        acc[Op[key] || key] = val;
      }
      return acc;
    },
    {},
  );
}

const gameQueries = {
  games: async (parent, { filter }, { currentUser }, info) => {
    let options;
    switch (filter) {
      case 'currentUser':
        options = { where: { createdById: currentUser.id } };
        break;
      default:
        const parsedFilter = JSON.parse(filter);
        options = { where: opSwap(parsedFilter) };
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

  editorContext: async (
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

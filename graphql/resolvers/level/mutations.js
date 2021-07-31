import { ForbiddenError } from 'apollo-server-express';
import { Game, Level } from '../../../database/models';

const levelMutations = {
  createLevel: async (obj, { params }, { currentUser }, info) => {
    const game = await Game.findByPk(params.gameId);
    if (!game) throw new Error('Game with specified gameId not found');
    if (currentUser.id !== game.createdById) {
      throw new ForbiddenError('Action forbidden');
    }
    const level = await Level.create(params);
    return level;
  },

  updateLevel: async (
    obj,
    { params: { id, ...levelParams } },
    { currentUser },
    info,
  ) => {
    const level = await Level.findByPk(id, {
      include: {
        model: Game,
        as: 'game',
      },
    });
    if (!level) throw new Error('Level not found');
    if (currentUser.id !== level.game.createdById) {
      throw new ForbiddenError('Action forbidden');
    }

    await level.update(levelParams);

    return level;
  },

  deleteLevel: async (parent, { id }, { currentUser }, info) => {
    const level = await Level.findByPk(id, {
      include: {
        model: Game,
        as: 'game',
      },
    });
    if (!level) throw new Error('Game not found');
    if (currentUser.id !== level.game.createdById) {
      throw new ForbiddenError('Action forbidden');
    }
    const recordsDeletedCount = await Level.destroy({ where: { id } });

    return { recordsDeletedCount };
  },
};

export default levelMutations;

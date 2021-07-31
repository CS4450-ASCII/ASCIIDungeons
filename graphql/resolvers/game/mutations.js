import { ForbiddenError } from 'apollo-server-express';
import { Game } from '../../../database/models';

const gameMutations = {
  createGame: async (
    obj,
    { params: { title, description } },
    { currentUser },
    info,
  ) => {
    const game = await Game.create({
      title,
      description,
      createdById: currentUser.id,
    });

    return game;
  },

  updateGame: async (
    parent,
    { params: { id, ...gameParams } },
    { currentUser },
    info,
  ) => {
    const game = await Game.findByPk(id);
    if (!game) throw new Error('Game not found');
    if (currentUser.id !== game.createdById) {
      throw new ForbiddenError('Action forbidden');
    }

    game.update(gameParams);

    return game;
  },

  deleteGame: async (parent, { id }, { currentUser }, info) => {
    const game = await Game.findByPk(id);
    if (!game) throw new Error('Game not found');
    if (currentUser.id !== game.createdById) {
      throw new ForbiddenError('Action forbidden');
    }
    const recordsDeletedCount = await Game.destroy({ where: { id } });

    return { recordsDeletedCount };
  },
};

export default gameMutations;

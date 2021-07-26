import { GameEntity } from '../../../database/models'

const gameEntityMutations = {
  createGameEntity: async (_, { gameEntity: {gameId, entityId} }) => {
    const gameEntity = await GameEntity.create({
      gameId,
      entityId
    });

    return gameEntity;
  },

  updateGameEntity: async (obj, args, context, info) => {
    let gameEntity = await GameEntity.findOne({ where: { id: args.id }})

    gameEntity.gameId = args.gameId;
    gameEntity.entityId = args.entityId;

    gameEntity.save();

    return gameEntity;
  }
};

export default gameEntityMutations;
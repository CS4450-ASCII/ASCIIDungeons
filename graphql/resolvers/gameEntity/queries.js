import { GameEntity } from '../../../database/models'

const gameEntityQueries = {
  gameEntities: async (_) => {
    const gameEntities = await GameEntity.findAll();

    return gameEntities;
  },

  gameEntity: async (args) => {
    const gameEntity = await GameEntity.findOne({ where: { id: args.id }});

    return gameEntity;
  }
};

export default gameEntityQueries;
import { LevelGameEntity } from '../../../database/models';

const levelGameEntityQueries = {
  levelGameEntities: async (obj, args, context, info) => {
    return await LevelGameEntity.findAll();
  },

  levelGameEntity: async (obj, args, context, info) => {
    return await LevelGameEntity.findOne({ where: { id: args.id } });
  }
};

export default levelGameEntityQueries;
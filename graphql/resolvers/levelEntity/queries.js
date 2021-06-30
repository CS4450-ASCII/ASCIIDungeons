import { LevelEntity } from '../../../database/models';

const levelEntityQueries = {
  levelEntities: async (obj, args, context, info) => {
    return await LevelEntity.findAll();
  },

  levelEntity: async (obj, args, context, info) => {
    return await LevelEntity.findOne({ where: { id: args.id } });
  }
};

export default levelEntityQueries;
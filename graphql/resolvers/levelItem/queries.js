import { LevelItem } from '../../../database/models';

const levelItemQueries = {
  levelItems: async (obj, args, context, info) => {
    return await LevelItem.findAll();
  },

  levelItem: async (obj, args, context, info) => {
    return await LevelItem.findOne({ where: { id: args.id } });
  }
};

export default levelItemQueries;
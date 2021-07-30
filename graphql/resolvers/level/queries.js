import { Level } from '../../../database/models';

const levelQueries = {
  levels: async (obj, args, context, info) => {
    return await Level.findAll();
  },

  level: async (obj, args, context, info) => {
    return await Level.findOne({ where: { id: args.id } });
  }
};

export default levelQueries;
import { Level } from '../../../database/models';

const levelQueries = {
  levels: async (obj, args, { currentUser }, info) => {
    const levels = await Level.findAll();
    return levels;
  },

  level: async (obj, { id }, { currentUser }, info) => {
    const level = await Level.findByPk(id);
    return level;
  },
};

export default levelQueries;

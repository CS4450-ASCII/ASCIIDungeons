import { Level } from '../../../database/models';

const levelQueries = {
  levels: async (obj, { gameId }, { currentUser }, info) => {
    const levels = await Level.findAll({
      where: { gameId },
      order: [['id', 'asc']],
    });
    return levels;
  },

  level: async (obj, { id }, { currentUser }, info) => {
    const level = await Level.findByPk(id);
    return level;
  },
};

export default levelQueries;

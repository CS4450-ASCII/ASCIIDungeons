import { Level } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const levelQueries = {
  levels: async (_, args) => {
    const levels = await Level.findAll();

    return levels;
  },

  level: async (obj, args, context, info) => {
    const level = await Level.findOne({ where: { id: args.id } });

    return level;
  }
};

export default levelQueries;
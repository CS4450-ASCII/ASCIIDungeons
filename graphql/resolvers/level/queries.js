import { Level } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const levelQueries = {
  levels: async (_, args) => {
    const levels = await Level.find();

    return levels;
  },

  level: async (_, {id}) => {
    const level = await Level.findById(id);

    return level;
  }
};

export default levelQueries;
import { Color } from '../../../database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const colorQueries = {
  colors: async (_, args) => {
    const colors = await Color.findAll();

    return colors;
  }
};

export default colorQueries;

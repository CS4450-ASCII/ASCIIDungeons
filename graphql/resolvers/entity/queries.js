import { Entity } from '../../../../ASCIIDungeons1/database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const entityQueries = {
  symbol: async (_, args) => {
    const entitys = await Entity.findAll();

    return entitys;
  }
};

export default entityQueries;

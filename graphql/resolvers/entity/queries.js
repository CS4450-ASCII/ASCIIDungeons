import { Entity } from '../../../../ASCIIDungeons1/database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const entityQueries = {
  symbol: async (_, args) => {
    const entities = await Entity.findAll();

    return entities;
  }
};

export default entityQueries;

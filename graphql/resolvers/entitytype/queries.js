import { EntityType } from '../../../database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const entityTypeQueries = {
  symbol: async (_, args) => {
    const entityTypes = await EntityType.findAll();

    return entityTypes;
  }
};

export default entityTypeQueries;

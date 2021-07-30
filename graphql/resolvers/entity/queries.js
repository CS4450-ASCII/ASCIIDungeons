import { Entity } from '../../../database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const entityQueries = {
  entities: async (_, args) => {
    const entities = await Entity.findAll();

    return entities;
  },

  entity: async (obj, args, context, info) => {
    const entity = await Entity.findOne({ where: { id: args.id }});

    return entity;
  }
};

export default entityQueries;

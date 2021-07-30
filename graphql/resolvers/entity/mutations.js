import { Entity } from '../../../database/models';


/**************************************************************
 * References:
 * -https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

const entityMutations = {
  createEntity: async (obj, { entity: { symbol, data } }, context, info) => {
    const entity = await Entity.create({
      symbol,
      data
    });
    return { entity };
  },

  updateEntity: async (_, args) => {
    // update entity
    // return newly updated entity
  }
};

export default entityMutations;

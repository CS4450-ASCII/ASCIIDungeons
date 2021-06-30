import { EntityType } from '../../../database/models';

/**************************************************************
 * References:
 * -https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

const entityTypeMutations = {
  createEntityType: async (obj, { entityType: { name } }, context, info) => {
    const entityType = await EntityType.create({
      name
    });
    return { entityType };
  },

  updateEntityType: async (_, args) => {
    // update entityType
    // return newly updated entityTy[e]
  }
};

export default entityTypeMutations;

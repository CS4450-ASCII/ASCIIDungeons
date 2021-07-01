import { ItemType } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const itemTypeQueries = {
  itemTypes: async (_, args) => {
    const itemTypes = await ItemType.findAll();

    return itemTypes;
  },

  itemType: async (obj, args, context, info) => {
    const itemType = await ItemType.findOne({ where: { id: args.id } });

    return itemType;
  }
};

export default itemTypeQueries;
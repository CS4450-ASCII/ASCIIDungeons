import { ItemType } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const itemTypeQueries = {
  itemTypes: async (_, args) => {
    const itemTypes = await ItemType.find();

    return itemTypes;
  },

  itemType: async (_, {id}) => {
    const itemType = await ItemType.findById(id);

    return itemType;
  }
};

export default itemTypeQueries;
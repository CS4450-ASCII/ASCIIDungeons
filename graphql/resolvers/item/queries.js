import { Item } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const itemQueries = {
  items: async (_, args) => {
    const items = await Item.find();

    return items;
  },

  item: async (_, {id}) => {
    const item = await Item.findById(id);

    return item;
  }
};

export default itemQueries;
import { Item } from '../../../database/models';


/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const itemQueries = {
  items: async (_, args) => {
    const items = await Item.findAll();

    return items;
  },

  item: async (obj, args, context, info) => {
    const item = await Item.findOne({ where: { id: args.id } });

    return item;
  }
};

export default itemQueries;
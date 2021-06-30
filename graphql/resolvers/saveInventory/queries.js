import { SaveInventory } from '../../../database/models';

const saveInventoryQueries = {
  saveInventories: async (obj, args, context, info) => {
    return await SaveInventory.findAll();
  },

  saveInventory: async (obj, args, context, info) => {
    return await SaveInventory.findOne({ where: { id: args.id } });
  }
};

export default saveInventoryQueries;
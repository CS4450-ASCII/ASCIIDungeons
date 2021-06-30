import { SaveInventory } from '../../../database/models';

const saveInventoryMutations = {
  createSaveInventory: async (
    obj,
    { saveInventory: { saveID, itemID, data } },
    context,
    info
  ) => {
    const saveInventory = await SaveInventory.create({
      saveID,
      itemID,
      data
    });

    return saveInventory;
  },

  updateSaveInventory: async (_, args) => {
    //TODO
  }
};

export default userMutations;
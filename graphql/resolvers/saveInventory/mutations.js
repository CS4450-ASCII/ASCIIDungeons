import { SaveInventory } from '../../../database/models';

const saveInventoryMutations = {
  createSaveInventory: async (
    parent,
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

  updateSaveInventory: async (parent, args, context, info) => {
    //Get the SaveInventory from the database
    //let saveInventory = await SaveInventory.find();

    //Modify the retrieved SaveInventory
    //saveInventory.property = newValue;

    //Save to the database
    //await saveInventory.save();
  }
};

export default saveInventoryMutations;
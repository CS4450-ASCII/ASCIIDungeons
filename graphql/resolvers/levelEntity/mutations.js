import { LevelEntity } from '../../../database/models';

const levelEntityMutations = {
  createLevelEntity: async (
    obj,
    { levelEntity: { saveID, itemID, data } },
    context,
    info
  ) => {
    const levelEntity = await LevelEntity.create({
      saveID,
      itemID,
      data
    });

    return levelEntity;
  },

  updateSaveInventory: async (_, args) => {
    //TODO
  }
};

export default levelEntityMutations;
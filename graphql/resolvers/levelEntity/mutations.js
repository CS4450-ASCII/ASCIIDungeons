import { LevelEntity } from '../../../database/models';

const levelEntityMutations = {
  createLevelEntity: async (
    obj,
    { levelEntity: { levelID, entityID, x, y } },
    context,
    info
  ) => {
    const levelEntity = await LevelEntity.create({
      levelID,
      entityID,
      x,
      y
    });

    return levelEntity;
  },

  updateSaveInventory: async (_, args) => {
    //TODO
  }
};

export default levelEntityMutations;
import { LevelItem } from '../../../database/models';

const levelItemMutations = {
  createLevelItem: async (
    obj,
    { levelItem: { levelID, itemID, x, y } },
    context,
    info
  ) => {
    const levelItem = await LevelItem.create({
      levelID,
      itemID,
      x,
      y
    });

    return levelItem;
  },

  updateLevelItem: async (_, args) => {
    //TODO
  }
};

export default levelItemMutations;
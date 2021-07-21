import { Level } from '../../../database/models';

const levelMutations = {
  createLevel: async (
    obj,
    { level: { gameID, width, height } },
    context,
    info
  ) => {
    const level = await Level.create({
      gameID,
      width,
      height
    });

    return level;
  },

  updateSaveInventory: async (_, args) => {
    //TODO
  }
};

export default levelMutations;
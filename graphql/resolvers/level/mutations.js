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

  updateLevel: async (obj, args, context, info) => {
    let level = await Level.findOne({ where: { id: args.id } })

    level.gameID = args.gameID;
    level.width = args.width;
    level.height = args.height;

    level.save();

    return level;
  }
};

export default levelMutations;
import { LevelGameEntity } from '../../../database/models';

const levelGameEntityMutations = {
  createLevelGameEntity: async (
    obj,
    { levelGameEntity: { levelID, gameEntityID, x, y } },
    context,
    info
  ) => {
    const levelGameEntity = await LevelGameEntity.create({
      levelID,
      gameEntityID,
      x,
      y
    });

    return levelGameEntity;
  },

  updateLevelGameEntity: async (obj, args, context, info) => {
    let levelGameEntity = await LevelGameEntity.findOne({ where: { id: args.id } })

    levelGameEntity.levelID = args.levelID;
    levelGameEntity.gameEntityID = args.gameEntityID;
    levelGameEntity.x = args.x;
    levelGameEntity.y = args.y;

    levelGameEntity.save();

    return levelGameEntity;
  }
};

export default levelGameEntityMutations;
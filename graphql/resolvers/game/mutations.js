import { Game } from '../../../database/models';

const gameMutations = {
  createGame: async (obj, 
    {game: { createdById, title, description, isPublished} },
    context,
    info
    ) => {
    const game = await Game.create({
      createdById,
      title,
      description,
      isPublished
    });

    return game;
  },

  updateGame: async (obj, args, context, info) => {
    let game = await Game.findOne({ where: { id: args.id } })

    game.createdById = args.createdById;
    game.title = args.title;
    game.description = args.description;
    game.isPublished = args.isPublished;

    game.save();

    return game;
  }
};

export default gameMutations;
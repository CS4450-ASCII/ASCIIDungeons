
const gameMutations = {
  createGame: async (_, { game }) => {
    const newGame = new Game(game);

    return newGame.save();
    
  },
  updateGame: async (_, args) => {},
};

export default gameMutations;
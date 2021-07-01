
const gameLevelMutations = {
  createGameLevel: async (_, { gameLevel }) => {
    const newGameLevel = new GameLevel(gameLevel);

    return newGameLevel.save();
  },
  updateGameLevel: async (_, args) => {},
};

export default gameLevelMutations;
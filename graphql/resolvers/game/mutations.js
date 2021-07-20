const gameMutations = {
  createGame: async (_, {game}) => {
    const newGame = new Game(game);

    return newGame.save();
  }
};

export default gameMutations;
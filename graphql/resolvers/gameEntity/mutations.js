const gameEntityMutations = {
  createGameEntity: async (_, { gameEntity }) => {
    const newGameEntity = new GameEntity(gameEntity);

    return newGameEntity.save();
  }
};

export default gameEntityMutations;
const levelMutations = {
  createLevel: async (_, { level }) => {
    const newLevel = new Level(level);

    return newLevel.save();
  },
  updateLevel: async (_, args) => {},
};

export default levelMutations;

const itemMutations = {
  createItem: async (_, { item }) => {
    const newItem = new Item(item);

    return newItem.save();
  },
  updateItem: async (_, args) => {},
};

export default itemMutations;
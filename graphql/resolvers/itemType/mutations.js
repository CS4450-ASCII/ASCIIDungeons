const itemTypeMutations = {
  createItemType: async (_, { itemType }) => {
    const newItemType = new ItemType(itemType);

    return newItemType.save();

  },
  updateItemType: async (_, args) => {},
};

export default itemTypeMutations;
import { User } from '../../../database/models';

const userQueries = {
  users: async (_, args) => {
    // return all users
    return await User.findAll();
  },
  user: async (_, args) => {
    // find user with id from args
    return await User.findOne({ where: { id: args.id } });
  }
};

export default userQueries;

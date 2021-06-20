import { User } from '../../../database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const userQueries = {
  users: async (obj, args, context, info) => {
    // return all users
    return await User.findAll();
  },

  user: async (obj, args, context, info) => {
    // find user with id from args
    return await User.findOne({ where: { id: args.id } });
  },

  currentUser: async (obj, args, context, info) => {
    return context.currentUser;
  }
};

export default userQueries;

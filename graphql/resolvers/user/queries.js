import { Game, User } from '../../../database/models';

/**************************************************************
 * References:
 * - https://graphql.org/learn/execution/#root-fields-resolvers
 *
 **************************************************************/

const userQueries = {
  users: async (obj, args, { currentUser }, info) => {
    // return all users
    return await User.findAll();
  },

  user: async (obj, { id }, { currentUser }, info) => {
    // find user with id from args
    const user = await User.findByPk(id, {
      include: { model: Game, as: 'games' },
    });
    return user;
  },

  currentUser: async (obj, args, { currentUser }, info) => {
    return currentUser;
  },
};

export default userQueries;

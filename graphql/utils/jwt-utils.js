import jwt from 'jsonwebtoken';
import { accessTokenSecret } from '../../config/environment';
import { User } from '../../database/models';

/**************************************************************
 * References:
 * - https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

/**
 * Get the user id from the specified request or token.
 *
 * @param req The HTTP request to get authorization from.
 * @return {number} The user id contained in the request or token.
 */
function getUserId(req) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return null;
    }
    return jwt.verify(token, accessTokenSecret).userId;
  } catch {
    return null;
  }
}

/**
 * Used for restricting GraphQL resolvers to authorized users
 * only.
 *
 * @param {object} The GraphQL context to try to get current user from.
 * @return {object} The current user (if found).
 * @throws Not authorized error (if current user not found).
 */
async function getCurrentUser(req) {
  // null if context or context.currentUser are null
  const currentUser = await User.findByPk(getUserId(req));

  if (currentUser) {
    return currentUser;
  } else {
    return null;
  }
}

export { getCurrentUser };

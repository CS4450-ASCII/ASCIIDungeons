import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { accessTokenSecret } from '../../config/environment';
import { User } from '../../database/models';

/**************************************************************
 * References:
 * - https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

/**
 * Verifies the specified token and gets the payload from it.
 *
 * @param {string} token The jwt token to get the payload from.
 * @returns {object} The extracted payload.
 */
function getTokenPayload(token) {
  return jwt.verify(token, accessTokenSecret);
}

/**
 * Get the user id from the specified request or token.
 *
 * @param req The HTTP request to get authorization from.
 * @param token The jwt token to get the user id from.
 * @return {number} The user id contained in the request or token.
 * @throws Access token missing (if no token provided in header)
 * @throws Authentication failed (if req or token are missing)
 */
function getUserId({ req, token }) {
  if (req) {
    // authHeader comes in as 'Bearer <token>'
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Access token missing');
    }
    return getTokenPayload(token).userId;
  } else if (token) {
    return getTokenPayload(token).userId;
  }
  throw new Error('Authentication failed');
}

/**
 * Get the user from the specified request or token.
 *
 * @param req The HTTP request to get authorization from.
 * @param token The jwt token to get the user id from.
 * @return {object} The user with the user id from the request or token.
 */
function getUser({ req, token }) {
  const userId = getUserId({ req, token });
  return User.findOne({ where: { id: userId } });
}

/**
 * Used for restricting GraphQL resolvers to authorized users
 * only.
 *
 * @param {object} The GraphQL context to try to get current user from.
 * @return {object} The current user (if found).
 * @throws Not authorized error (if current user not found).
 */
function authenticateUser(context) {
  // null if context or context.currentUser are null
  const currentUser = _.get(context, 'currentUser');

  if (currentUser) {
    return currentUser;
  } else {
    throw new Error('Not authorized');
  }
}

export { getTokenPayload, getUserId, getUser, authenticateUser };

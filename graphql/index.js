import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import _ from 'lodash';
import { env } from '../config/environment';
import schema from './schema';
import { getCurrentUser } from './utils/jwt-utils';

/**************************************************************
 * References:
 * - https://www.howtographql.com/graphql-js/6-authentication/
 * - https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc
 *
 **************************************************************/

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  context: async ({ req }) => {
    const currentUser = await getCurrentUser(req);

    let requestMatch = _.get(req, 'body.query').match(
      /\{(\r\n|\r|\n)*([^(){}]*)[({]/
    );
    if (requestMatch) {
      requestMatch = requestMatch[2].trim();
    }

    const publicRequests = new Set(['loginUser', 'createUser', 'currentUser']);
    if (currentUser || publicRequests.has(requestMatch)) {
      return {
        ...req,
        currentUser
      };
    }

    throw new AuthenticationError('Not authorized.');
  }
});

export default apolloServer;

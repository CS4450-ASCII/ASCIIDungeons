import { ApolloServer } from 'apollo-server-express';
import _ from 'lodash';
import { env } from '../config/environment';
import schema from './schema';
import { getUser } from './utils/jwt-utils';

/**************************************************************
 * References:
 * - https://www.howtographql.com/graphql-js/6-authentication/
 * - https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc
 *
 **************************************************************/

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  context: ({ req }) => {
    return {
      ...req,
      currentUser: _.get(req, 'headers.authorization') ? getUser({ req }) : null
    };
  }
});

export default apolloServer;

//https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc
import { ApolloServer } from 'apollo-server-express';
import { env } from '../config/environment';
import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  playground: env.development
});

export default apolloServer;

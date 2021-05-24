import { authorQueries, authorMutations } from './example';

const resolvers = {
  Query: {
    ...authorQueries
  },
  Mutation: {
    ...authorMutations
  }
};

export default resolvers;

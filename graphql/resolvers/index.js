import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);

const [allQueries, allMutations] = fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file !== basename;
  })
  .reduce(
    ([queries, mutations], file) => {
      const filepath = path.join(__dirname, file);
      let importedQueries, importedMutations;

      try {
        importedQueries = require(path.join(filepath, 'queries.js')).default;
        importedMutations = require(path.join(
          filepath,
          'mutations.js',
        )).default;
      } catch {}

      return [
        {
          ...queries,
          ...importedQueries,
        },
        {
          ...mutations,
          ...importedMutations,
        },
      ];
    },
    [{}, {}],
  );

const resolvers = {
  Query: {
    ...allQueries,
  },
  Mutation: {
    ...allMutations,
  },
  Level: {
    mapData: (level, args, context, info) => {
      return JSON.stringify(level.mapData);
    },
  },
};

export default resolvers;

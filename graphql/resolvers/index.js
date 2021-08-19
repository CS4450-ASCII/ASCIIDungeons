import fs from 'fs';
import _ from 'lodash';
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
    stairsData: (level, args, context, info) => {
      const mapData = level.mapData;
      // where character is '<' or '>'
      const stairsData = _.filter(mapData, (datum) => {
        const character = _.get(datum, 'character');
        if (character === '<' || character === '>') {
          return datum;
        }
      });
      return JSON.stringify(stairsData);
    },
  },
  Object: {
    dataTemplate: (object, args, context, info) => {
      return JSON.stringify(object.dataTemplate);
    },
  },
};

export default resolvers;

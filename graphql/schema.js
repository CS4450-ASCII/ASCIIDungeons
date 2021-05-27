import { makeExecutableSchema } from '@graphql-tools/schema';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import resolvers from './resolvers';

/**************************************************************************
 * References:
 * - https://gist.github.com/ernestognw/65a19570665bafbc86b1ca9184eb76a6#file-graphql-schema-js
 *
 **************************************************************************/

const gqlFiles = readdirSync(join(__dirname, './typedefs'));

let typeDefs = '';

gqlFiles.forEach(file => {
  typeDefs += readFileSync(join(__dirname, './typedefs', file), {
    encoding: 'utf8'
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;

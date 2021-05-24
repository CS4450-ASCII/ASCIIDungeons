const authors = [
  { id: 1, name: 'Billy' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Joe' }
];
const authorQueries = {
  authors: async (_, args) => {
    // return all authors
    return authors;
  },
  author: async (_, args) => {
    // find author with id from args
    return authors.filter(author => author.id === parseInt(args.id))[0];
  }
};

export default authorQueries;

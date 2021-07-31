import gql from 'graphql-tag';

const BASIC_GAME_FRAGMENT = gql`
  fragment BasicGame on Game {
    id
    title
    description
    createdById
  }
`;

const CREATE_GAME = gql`
  mutation CreateGame($params: GameCreateInput!) {
    createGame(params: $params) {
      ...BasicGame
    }
  }
  ${BASIC_GAME_FRAGMENT}
`;

const QUERY_GAMES = gql`
  query GetGames($filter: String) {
    games(filter: $filter) {
      ...BasicGame
    }
  }
  ${BASIC_GAME_FRAGMENT}
`;

const QUERY_GAME = gql`
  query GetGame($id: ID!) {
    game(id: $id) {
      ...BasicGame
    }
  }
  ${BASIC_GAME_FRAGMENT}
`;

export const graphqlGame = {
  BASIC_GAME_FRAGMENT,
  CREATE_GAME,
  QUERY_GAMES,
  QUERY_GAME,
};

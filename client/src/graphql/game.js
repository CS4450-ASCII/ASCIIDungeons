import gql from 'graphql-tag';
import { levelGraphql } from './level';

// Fragments
const BASIC_GAME_FRAGMENT = gql`
  fragment BasicGame on Game {
    id
    title
    description
    isPublished
    createdById
  }
`;

// Queries
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

const QUERY_FULL_GAME = gql`
  query GetFullGame($id: ID!) {
    game(id: $id) {
      ...BasicGame
      levels {
        ...FullLevel
      }
    }
  }
  ${BASIC_GAME_FRAGMENT}
  ${levelGraphql.FULL_LEVEL_FRAGMENT}
`;

const FULL_OBJECT_FRAGMENT = gql`
  fragment FullObject on Object {
    id
    baseType
    gameEngineLayer
    title
    character
    isPassable
    dataTemplate
  }
`;

const EDITOR_CONTEXT = gql`
  query EditorContext($gameId: ID!, $levelIndex: ID) {
    editorContext(gameId: $gameId, levelIndex: $levelIndex) {
      currentGame {
        ...BasicGame
        levels {
          id
          title
          stairsData
        }
        gameObjects {
          id
          object {
            ...FullObject
          }
        }
      }

      currentLevel {
        ...FullLevel
      }
    }
  }
  ${BASIC_GAME_FRAGMENT}
  ${levelGraphql.FULL_LEVEL_FRAGMENT}
  ${FULL_OBJECT_FRAGMENT}
`;

// Mutations
const UPDATE_GAME = gql`
  mutation UpdateGame($params: GameUpdateInput!) {
    updateGame(params: $params) {
      id
    }
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

export const gameGraphql = {
  BASIC_GAME_FRAGMENT,
  CREATE_GAME,
  QUERY_GAMES,
  QUERY_GAME,
  QUERY_FULL_GAME,
  EDITOR_CONTEXT,
  UPDATE_GAME,
};

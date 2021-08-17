import gql from 'graphql-tag';

const BASIC_LEVEL_FRAGMENT = gql`
  fragment BasicLevel on Level {
    id
    title
    width
    height
    mapData
  }
`;

const FULL_LEVEL_FRAGMENT = gql`
  fragment FullLevel on Level {
    ...BasicLevel
  }
  ${BASIC_LEVEL_FRAGMENT}
`;

const CREATE_LEVEL = gql`
  mutation CreateLevel($params: LevelCreateInput!) {
    createLevel(params: $params) {
      level {
        ...BasicLevel
      }
      levelIndex
    }
  }
  ${BASIC_LEVEL_FRAGMENT}
`;

const QUERY_LEVEL = gql`
  query GetLevel($id: ID!) {
    level(id: $id) {
      ...BasicLevel
    }
  }
  ${BASIC_LEVEL_FRAGMENT}
`;

export const levelGraphql = {
  BASIC_LEVEL_FRAGMENT,
  CREATE_LEVEL,
  QUERY_LEVEL,
  FULL_LEVEL_FRAGMENT,
};

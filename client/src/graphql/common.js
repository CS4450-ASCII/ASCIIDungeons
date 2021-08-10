import gql from 'graphql-tag';

export const TIMESTAMPS_FRAGMENT = gql`
  fragment Timestamps on Timestamps {
    createdAt
    updatedAt
  }
`;

export default {
  TIMESTAMPS_FRAGMENT,
};

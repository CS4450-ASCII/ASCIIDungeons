import gql from 'graphql-tag';

const COMPLETE_USER_FRAGMENT = gql`
  fragment CompleteUser on User {
    id
    email
    displayName
    createdAt
    updatedAt
  }
`;

const LOGIN_USER = gql`
  mutation LoginUser($user: UserLoginInput!) {
    loginUser(user: $user) {
      token
      user {
        ...CompleteUser
      }
    }
  }
  ${COMPLETE_USER_FRAGMENT}
`;

export const userRequests = {
  LOGIN_USER
};

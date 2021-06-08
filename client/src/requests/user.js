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

const AUTH_PAYLOAD_FRAGMENT = gql`
  fragment AuthPayload on AuthPayload {
    token
    user {
      ...CompleteUser
    }
  }
  ${COMPLETE_USER_FRAGMENT}
`;

const LOGIN_USER = gql`
  mutation LoginUser($user: UserLoginInput!) {
    loginUser(user: $user) {
      ...AuthPayload
    }
  }
  ${AUTH_PAYLOAD_FRAGMENT}
`;

const CREATE_USER = gql`
  mutation CreateUser($user: UserCreateInput!) {
    createUser(user: $user) {
      ...AuthPayload
    }
  }
  ${AUTH_PAYLOAD_FRAGMENT}
`;

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      ...CompleteUser
    }
  }
  ${COMPLETE_USER_FRAGMENT}
`;

export const userRequests = {
  LOGIN_USER,
  CREATE_USER,
  CURRENT_USER
};

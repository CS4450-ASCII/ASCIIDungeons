import gql from 'graphql-tag';
import { TIMESTAMPS_FRAGMENT } from './common';

const COMPLETE_USER_FRAGMENT = gql`
  fragment CompleteUser on User {
    id
    email
    displayName
    ...Timestamps
  }
  ${TIMESTAMPS_FRAGMENT}
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
  mutation LoginUser($params: UserLoginInput!) {
    loginUser(params: $params) {
      ...AuthPayload
    }
  }
  ${AUTH_PAYLOAD_FRAGMENT}
`;

const CREATE_USER = gql`
  mutation CreateUser($params: UserCreateInput!) {
    createUser(params: $params) {
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

const USER = gql`
query User($id: ID!) {
  user(id: $id) {
    id
    displayName
    email
    games {
      title
      description
    }
  }
}
`;

const USERS = gql`
query Users {
  users {
    id
    displayName
  }
}
`;

//TODO
// UPDATE_USER (see CreateUser above)
const UPDATE_USER = gql`
  mutation UpdateUser($params: UserUpdateInput!) {
    updateUser(params: $params) {
      id
      displayName
      email
    }
  }
`;

export const userGraphql = {
  LOGIN_USER,
  CREATE_USER,
  CURRENT_USER,
  USER,
  USERS,
  UPDATE_USER,
};

import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { userRequests } from '../requests/user';
import authHelper from './authentication';

export function useCurrentUser() {
  let currentUser = {
    id: undefined,
    email: undefined,
    displayName: undefined
  };

  const { loading, error, data, client } = useQuery(userRequests.CURRENT_USER, {
    fetchPolicy: 'cache-first'
  });

  currentUser = _.get(data, 'currentUser', {});

  const logout = () => {
    authHelper.logout();
    client.resetStore();
  };

  return { loading, error, currentUser, client, logout };
}

import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';
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

export function useErrorHandler() {
  const location = useLocation();
  const { setErrors } = useContext(AppContext);

  useEffect(() => {
    // clear errors whenever the location changes
    setErrors(null);
  }, [location.pathname, setErrors]);

  return { setErrors };
}

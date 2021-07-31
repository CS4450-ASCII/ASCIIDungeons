import { useMutation, useQuery } from '@apollo/client';
import _ from 'lodash';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorProvider';
import { graphqlUser } from '../graphql/user';
import authHelper from './authentication';

export function useCurrentUser() {
  let currentUser = {
    id: undefined,
    email: undefined,
    displayName: undefined,
  };

  const { loading, error, data, client } = useQueryWithError(
    graphqlUser.CURRENT_USER,
    {
      fetchPolicy: 'cache-first',
    },
  );

  currentUser = _.get(data, 'currentUser', {});

  const logout = () => {
    authHelper.logout();
    client.resetStore();
  };

  return { loading, error, currentUser, client, logout };
}

export function useMutationWithError(mutation, options) {
  const { setErrors } = useContext(ErrorContext);

  // clear errors whenever the location changes
  useOnLocationChanged(() => setErrors(null));

  return useMutation(mutation, {
    onError: (error) => {
      setErrors([error.message]);
    },
    ...options,
  });
}

export function useQueryWithError(query, options) {
  const { setErrors } = useContext(ErrorContext);

  // clear errors whenever the location changes
  useOnLocationChanged(() => setErrors(null));

  return useQuery(query, {
    onError: (error) => {
      setErrors([error.message]);
    },
    ...options,
  });
}

export function useOnLocationChanged(callback) {
  const location = useLocation();
  useEffect(() => {
    callback(location);
  }, [location.pathname]);
}

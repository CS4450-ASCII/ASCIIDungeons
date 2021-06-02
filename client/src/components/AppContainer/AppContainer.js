import { useQuery } from '@apollo/client';
import _ from 'lodash';
import React from 'react';
import { userRequests } from '../../requests/user';

function AppContainer() {
  const { loading, error, data } = useQuery(userRequests.CURRENT_USER, {
    fetchPolicy: 'cache-only'
  });
  const currentUser = _.get(data, 'currentUser', {});
  return <div>Welcome, {currentUser.displayName || currentUser.email}!</div>;
}

export default AppContainer;

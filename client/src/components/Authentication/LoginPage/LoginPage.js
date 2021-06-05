import { useMutation } from '@apollo/client';
import React from 'react';
import PageHeader from '../../Common/PageHeader';
import { setAccessToken } from '../../../helpers/authentication';
import { userRequests } from '../../../requests/user';
import { makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'stretch'
  }
});

function LoginPage(props) {
  const classes = useStyles();
  const [loginUser] = useMutation(userRequests.LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      setAccessToken(loginUser.token);
    }
  });

  const onSubmit = values => {
    loginUser({
      variables: { user: values }
    });
  };

  return (
    <div className={classes.root}>
      <PageHeader text='ASCII Dungeons' />
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default LoginPage;

import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import authHelper from '../../../helpers/authentication';
import { userRequests } from '../../../requests/user';
import LoginForm from './LoginForm';

const useStyles = makeStyles({
  root: {}
});

function LoginPage(props) {
  const classes = useStyles();
  const [loginUser] = useMutation(userRequests.LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      authHelper.setAccessToken(loginUser.token);
    }
  });

  const onSubmit = values => {
    loginUser({
      variables: { user: values }
    });
  };

  return (
    <div className={classes.root}>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default LoginPage;

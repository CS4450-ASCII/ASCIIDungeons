import { useMutation } from '@apollo/client';
import React from 'react';
import PageHeader from '../../Common/PageHeader';
import { setAccessToken } from '../../../helpers/authentication';
import { userRequests } from '../../../requests/user';
import { Box, Grid, makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';
import PageFooter from '../../Common/PageFooter';

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
      <Grid item>
        <PageHeader text='ASCII Dungeons' />
      </Grid>
      <LoginForm onSubmit={onSubmit} />
      <PageFooter />
    </div>
  );
}

export default LoginPage;

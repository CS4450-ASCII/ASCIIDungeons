import { useMutation } from '@apollo/client';
import { Grid } from '@material-ui/core';
import React from 'react';
import { Field, Form as FForm } from 'react-final-form';
import { setAccessToken } from '../../helpers/authentication';
import { userRequests } from '../../requests/user';

function LoginForm(props) {
  const [loginUser, { data }] = useMutation(userRequests.LOGIN_USER, {
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
    <Grid
      container
      justify='center'
      alignItems='center'
      direction='row'
      style={{ height: '100vh' }}
    >
      <FForm onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <Field name='email' component='input' placeholder='Email' />
            </Grid>
            <Grid item xs={12}>
              <Field
                name='password'
                component='input'
                type='password'
                placeholder='Password'
              />
            </Grid>
            <Grid item xs={12}>
              <button type='submit'>Login</button>
            </Grid>
          </form>
        )}
      </FForm>
    </Grid>
  );
}

export default LoginForm;

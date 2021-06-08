import { useMutation } from '@apollo/client';
import { makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import authHelper from '../../helpers/authentication';
import { userRequests } from '../../requests/user';
import FormComponent from '../Common/FormComponent';
import InputField from '../Common/InputField';

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

  const formFields = useMemo(
    () => [
      {
        name: 'email',
        component: InputField,
        required: true
      },
      {
        name: 'password',
        component: InputField,
        type: 'password',
        required: true
      }
    ],
    []
  );

  const onSubmit = values => {
    loginUser({
      variables: { user: values }
    });
  };

  return (
    <div className={classes.root}>
      <FormComponent
        onSubmit={onSubmit}
        formFields={formFields}
        submitButtonText='Login'
        footer={
          <Typography variant='h2'>
            Need an account? <Link to='/signup'>Sign Up</Link>
          </Typography>
        }
      />
    </div>
  );
}

export default LoginPage;

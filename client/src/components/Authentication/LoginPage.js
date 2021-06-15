import { useMutation } from '@apollo/client';
import { makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import authHelper from '../../helpers/authentication';
import { userRequests } from '../../requests/user';
import useErrorHandler from '../AppContainer/ErrorMessageHandler';
import FormComponent from '../Common/FormComponent';
import InputField from '../Common/InputField';

const useStyles = makeStyles({
  root: {}
});

function LoginPage(props) {
  const classes = useStyles();
  const { setErrors } = useErrorHandler();

  const [loginUser] = useMutation(userRequests.LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      authHelper.setAccessToken(loginUser.token);
    },
    onError: error => {
      setErrors([error.message]);
    }
  });

  const formFields = useMemo(
    () => [
      {
        name: 'email',
        component: InputField
      },
      {
        name: 'password',
        component: InputField,
        type: 'password'
      }
    ],
    []
  );

  const onSubmit = values => {
    loginUser({
      variables: { user: values }
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email required.'),
    password: Yup.string().required('Password required.')
  });

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
        validationSchema={validationSchema}
      />
    </div>
  );
}

export default LoginPage;

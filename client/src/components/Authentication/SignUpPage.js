import { useMutation } from '@apollo/client';
import { makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
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

function SignUpPage(props) {
  const classes = useStyles();
  const { setErrors } = useErrorHandler();

  const [createUser] = useMutation(userRequests.CREATE_USER, {
    onCompleted: ({ createUser }) => {
      authHelper.setAccessToken(createUser.token);
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
        name: 'displayName',
        component: InputField
      },
      {
        name: 'password',
        component: InputField,
        type: 'password'
      },
      {
        name: 'confirmPassword',
        component: InputField,
        type: 'password'
      }
    ],
    []
  );

  const onSubmit = values => {
    createUser({
      variables: { user: _.omit(values, 'confirmPassword') }
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email required.'),
    password: Yup.string().required('Password required.'),

    // ensure password and confirm password are the same
    confirmPassword: Yup.string()
      .required('Confirm required.')
      .oneOf([Yup.ref('password')], 'Passwords must match.')
  });

  return (
    <div className={classes.root}>
      <FormComponent
        onSubmit={onSubmit}
        formFields={formFields}
        submitButtonText='Sign Up'
        footer={
          <Typography variant='h2'>
            Have an account? <Link to='/login'>Login</Link>
          </Typography>
        }
        gridProps={{
          style: { paddingRight: 85 }
        }}
        validationSchema={validationSchema}
      />
    </div>
  );
}

export default SignUpPage;

import { makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import authHelper from '../../helpers/authentication';
import { useMutationWithError } from '../../helpers/customHooks';
import formValidations from '../../helpers/formValidations';
import { userRequests } from '../../requests/user';
import FormComponent from '../Common/FormComponent';
import InputField from '../Common/InputField';

const useStyles = makeStyles({
  root: {}
});

function LoginPage(props) {
  const classes = useStyles();

  const [loginUser] = useMutationWithError(userRequests.LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      authHelper.setAccessToken(loginUser.token);
    }
  });

  const formFields = useMemo(
    () => [
      {
        name: 'email',
        Component: InputField
      },
      {
        name: 'password',
        Component: InputField,
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
    email: formValidations.VALID_EMAIL,
    password: formValidations.PASSWORD_REQUIRED
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

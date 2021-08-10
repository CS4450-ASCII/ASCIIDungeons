import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { userGraphql } from '../../graphql/user';
import authHelper from '../../helpers/authentication';
import { useMutationWithError } from '../../helpers/customHooks';
import formValidations from '../../helpers/formValidations';
import FormComponent from '../Common/Forms/FormComponent';
import InputField from '../Common/Forms/InputField';

function LoginPage(props) {
  const [loginUser] = useMutationWithError(userGraphql.LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      authHelper.setAccessToken(loginUser.token);
    },
  });

  const formFields = [
    {
      name: 'email',
      Component: InputField,
    },
    {
      name: 'password',
      Component: InputField,
      type: 'password',
    },
  ];

  const onSubmit = (values) => {
    loginUser({
      variables: { params: values },
    });
  };

  const validationSchema = Yup.object().shape({
    email: formValidations.VALID_EMAIL,
    password: formValidations.PASSWORD_REQUIRED,
  });

  return (
    <div>
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

import { makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
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

function SignUpPage(props) {
  const classes = useStyles();

  const [createUser] = useMutationWithError(userRequests.CREATE_USER, {
    onCompleted: ({ createUser }) => {
      authHelper.setAccessToken(createUser.token);
    }
  });

  const formFields = useMemo(
    () => [
      {
        name: 'email',
        Component: InputField
      },
      {
        name: 'displayName',
        Component: InputField
      },
      {
        name: 'password',
        Component: InputField,
        type: 'password'
      },
      {
        name: 'confirmPassword',
        Component: InputField,
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
    email: formValidations.VALID_EMAIL,
    password: formValidations.PASSWORD_REQUIRED,

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

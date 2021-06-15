import { useMutation } from '@apollo/client';
import { makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import authHelper from '../../helpers/authentication';
import { userRequests } from '../../requests/user';
import FormComponent from '../Common/FormComponent';
import InputField from '../Common/InputField';

const useStyles = makeStyles({
  root: {}
});

function SignUpPage(props) {
  const classes = useStyles();
  const { setErrors } = useContext(AppContext);
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
        component: InputField,
        required: true
      },
      {
        name: 'displayName',
        component: InputField,
        required: false
      },
      {
        name: 'password',
        component: InputField,
        type: 'password',
        required: true
      },
      {
        name: 'confirmPassword',
        component: InputField,
        type: 'password',
        required: true
      }
    ],
    []
  );

  // TODO: Add validation to ensure password and confirm password are the same

  const onSubmit = values => {
    createUser({
      variables: { user: _.omit(values, 'confirmPassword') }
    });
  };

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
      />
    </div>
  );
}

export default SignUpPage;

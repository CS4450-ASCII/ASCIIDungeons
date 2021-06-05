import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Field, Form as FForm } from 'react-final-form';
import InputField from '../../Common/TextField';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#C4C4C4',
    height: '3em',
    width: '20em',
    marginLeft: '1em'
  },
  label: {
    fontSize: '1.5em',
    height: '3em',
    verticalAlign: 'center'
  }
});

function LoginForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;

  return (
    <div>
      <Grid container justify='flex-end'>
        <FForm onSubmit={onSubmit}>
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <InputField name='email' label='Email:' />
              </Grid>
              <Grid item xs={12}>
                <InputField name='email' type='password' label='Password:' />
              </Grid>
              <button type='submit'>Login</button>
            </form>
          )}
        </FForm>
      </Grid>
    </div>
  );
}

export default LoginForm;

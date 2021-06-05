import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Field, Form as FForm } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Link } from 'react-router-dom';
import InputFieldItem from '../../Common/InputFieldItem';

const useStyles = makeStyles({
  root: {
    maxWidth: '550px',
    margin: 'auto'
  },
  label: {
    fontSize: '1.5em',
    height: '3em'
  }
});

function LoginForm(props) {
  const classes = useStyles();
  const { onSubmit, gridItemProps } = props;

  return (
    <FForm onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            item
            container
            spacing={2}
            className={classes.root}
            direction='column'
            alignItems='flex-end'
            {...gridItemProps}
          >
            <InputFieldItem name='email' />
            <InputFieldItem name='password' />
            <Grid item>
              <Button color='secondary'>Login</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>
                Need an account? <Link to='/signup'>Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      )}
    </FForm>
  );
}

export default LoginForm;

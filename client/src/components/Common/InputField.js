import { Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import { TextField } from 'mui-rff';
import React from 'react';

const useStyles = makeStyles({
  root: {}
});

function InputField(props) {
  const { label, name, ...rest } = props;

  return (
    <Grid container justify='flex-end' alignItems='center'>
      <Grid item style={{ marginRight: '0.5em' }}>
        <Typography variant='h2'>{label || _.startCase(name)}:</Typography>
      </Grid>
      <Grid item>
        <TextField name={name} {...rest} />
      </Grid>
    </Grid>
  );
}

export default InputField;

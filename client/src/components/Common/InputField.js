import { Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import { TextField } from 'mui-rff';
import React from 'react';

const useStyles = makeStyles({});

function InputField(props) {
  const classes = useStyles();
  const { label, name, multiline, xs, noWrap, ...rest } = props;

  return (
    <Grid
      container
      justify='flex-end'
      alignItems='center'
      style={{ flexWrap: noWrap && 'nowrap' }}
    >
      <Grid
        item
        style={{ marginBottom: multiline ? '0.5em' : 0 }}
        xs={multiline && 12}
      >
        <Typography variant='h2'>{label || _.startCase(name)}:</Typography>
      </Grid>
      <Grid item xs={multiline && 12}>
        <TextField name={name} multiline={multiline} {...rest} fullWidth />
      </Grid>
    </Grid>
  );
}

export default InputField;

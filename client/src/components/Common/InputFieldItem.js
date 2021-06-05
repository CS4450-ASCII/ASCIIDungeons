import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import { TextField } from 'mui-rff';

const useStyles = makeStyles({
  root: {}
});

function InputFieldItem(props) {
  const { label, xs, sm, md, lg, name, ...rest } = props;

  return (
    <Grid
      item
      container
      justify='flex-end'
      alignItems='center'
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
    >
      <Grid item style={{ marginRight: '0.5em' }}>
        <Typography variant='h2'>{label || _.startCase(name)}:</Typography>
      </Grid>
      <Grid item>
        <TextField name={name} {...rest} />
      </Grid>
    </Grid>
  );
}

export default InputFieldItem;

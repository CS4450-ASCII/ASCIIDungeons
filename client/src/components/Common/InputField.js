import { Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import { TextField } from 'mui-rff';
import React from 'react';

const useStyles = makeStyles({
  startLabel: ({ multiline }) => ({
    paddingBottom: multiline ? '0.5em' : 0,
    paddingRight: '0.5em'
  }),
  endLabel: {
    paddingLeft: '0.5em'
  }
});

function InputField(props) {
  const classes = useStyles(props);
  const {
    label,
    name,
    multiline,
    xs,
    noWrap,
    endLabel,
    inputWidth,
    inputHeight,
    ...rest
  } = props;

  return (
    <Grid
      container
      justify='flex-end'
      alignItems='center'
      style={{ flexWrap: noWrap && 'nowrap' }}
    >
      <Grid item xs={multiline && 12}>
        <Typography variant='h2' className={classes.startLabel}>
          {label || _.startCase(name)}:
        </Typography>
      </Grid>
      <Grid item xs={multiline && 12}>
        <TextField
          name={name}
          multiline={multiline}
          style={{
            width: inputWidth,
            height: inputHeight
          }}
          {...rest}
        />
      </Grid>
      {endLabel && (
        <Grid item xs={multiline && 12}>
          <Typography variant='h2' className={classes.endLabel}>
            {endLabel}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default InputField;

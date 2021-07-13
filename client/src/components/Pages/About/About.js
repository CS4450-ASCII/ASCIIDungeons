import {Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    '& .MuiGrid-item': {
      height: 75
    }
  }
});

function About(props) {
  const classes = useStyles();
  const {} = props;

  return (
  <div className={classes.root}>
  {(<Grid container direction = 'column' alignItems='center'>
      <Grid item>
        <Typography variant = 'h1'>Contributors:</Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'h2'>ButteredBytes</Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'h2'>ihavespoken</Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'h2'>Scruffy mmhmm</Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'h2'>Topped</Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'h2'>Free Labor</Typography>
      </Grid>
  </Grid>
  )}
  </div>
  );
}

export default About;

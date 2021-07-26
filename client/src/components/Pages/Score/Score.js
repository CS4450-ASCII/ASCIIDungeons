import { Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  root: { justifyItems: 'flex-end' },
  name: {
    display: 'flex-left',
    color: 'blue'
  },
  score: {
    display: 'flex-right',
    //alignContent: 'center',
    //alignItems: 'center',
    color: 'blue',
    alignItems: 'alignRight'
  },
  scores: {
    display: 'flex'
  },
  gridContainer: {
    alignItems: 'center'
  }
});

function Score(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      {
        <Grid className={classes.gridContainer} container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              <div className={classes.scores}>
                <p className={classes.name}>1.ButteredBytes</p>{' '}
                <p className={classes.score} style={{ alignSelf: 'flex-end' }}>
                  9999
                </p>
              </div>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              <div className={classes.scores}>
                <p className={classes.name}>2.ihavespoken</p>{' '}
                <p className={classes.score}>9999</p>
              </div>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              <div className={classes.scores}>
                <p className={classes.name}>3.Scruffy mmhmm</p>{' '}
                <p className={classes.score}>9999</p>
              </div>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              <div className={classes.scores}>
                <p className={classes.name}>4.Topped</p>{' '}
                <p className={classes.score}>9999</p>
              </div>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              <div className={classes.scores}>
                <p className={classes.name}>5.Free Labor</p>{' '}
                <p className={classes.score}>9999</p>
              </div>
            </Typography>
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default Score;

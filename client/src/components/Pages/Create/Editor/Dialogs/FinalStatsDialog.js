import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { dummyGameData } from '../../../../../stories/dummyStatsData';
import Dialog from '../../../../Common/Dialog';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function FinalStatsDialog(props) {
  const classes = useStyles();
  const { openButton, games = dummyGameData, ...rest } = props;

  const [selectedGame, setSelectedGame] = useState(null);

  const content = (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Name</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Time Completed</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>LostBible</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>12m 36s</Paper>
        </Grid>
      </Grid>
    </div>
  );

  const onClose = () => {
    setSelectedGame(null);
  };

  return (
    <div className={classes.root}>
      <Dialog
        {...{
          title: 'Final Stats',
          openButton,
          content,
          onClose,
          fullWidth: true,
          maxWidth: 'sm',
          ...rest
        }}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {},
  descriptionBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    fontFamily: ['IBMBios'],
    fontSize: '1.5em',
    padding: 10
  }
});

export default FinalStatsDialog;

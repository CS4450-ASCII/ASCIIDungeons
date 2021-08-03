import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { dummyGameData } from '../../../../../stories/dummyStatsData';
import Dialog from '../../../../Common/Dialog';
import Grid from '@material-ui/core/Grid';

function FinalStatsDialog(props) {
  const classes = useStyles();
  const { openButton, games = dummyGameData, ...rest } = props;

  const [setSelectedGame] = useState(null);

  const content = (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p className={classes.paper}>PortalDoc</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.paper}>Total Time: 12m 36s</p>
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
  },
  paper: {
    fontFamily: ['IBMBios'],
    fontSize: '11px'
  }
});

export default FinalStatsDialog;

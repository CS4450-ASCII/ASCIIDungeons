import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: '0',
    padding: '0.5em 1em'
  }
});

function PageFooter(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <Typography variant='h2'>Welcome, Adventurer! </Typography>
    </div>
  );
}

export default PageFooter;

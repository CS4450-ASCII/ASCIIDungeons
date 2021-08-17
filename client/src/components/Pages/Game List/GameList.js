import { makeStyles } from '@material-ui/core';
import React from 'react';
import VerticalTabs from './FilterTabs';

const useStyles = makeStyles({
  root: {},
});

function GameList(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <VerticalTabs/>
    </div>
  );
}

export default GameList;

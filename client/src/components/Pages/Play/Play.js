import { makeStyles } from '@material-ui/core';
import React from 'react';
import GameList from '../Game List/GameList';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
});

function Play(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <GameList />
    </div>
  );
}

export default Play;

import { makeStyles } from '@material-ui/core';
import React from 'react';
import Filter from './Filter';
import GameListGamesContainer from './GameListGames';

const useStyles = makeStyles({
  root: {},
});

function GameList(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <Filter />
      <GameListGamesContainer/>
    </div>
  );
}

export default GameList;

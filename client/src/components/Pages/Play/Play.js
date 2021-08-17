import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GameEngine } from '../../Game/Engine/GameEngine';
import GameList from '../Game List/GameList';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
  },
});

function Play(props) {
  const classes = useStyles();
  const {} = props;

  const [gameEngine] = useState(new GameEngine());

  useEffect(() => {
    gameEngine.renderer.showGridLines(false);
    gameEngine.start();
  }, []);

  return (
    <div className={classes.root}>
      <GameList />
    </div>
  );
}

export default Play;

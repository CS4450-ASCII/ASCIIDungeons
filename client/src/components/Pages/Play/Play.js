import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GameEngine } from '../../Game/Engine/GameEngine';
import GameContainer from '../../Game/GameContainer';

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 600,
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
      <GameContainer />
    </div>
  );
}

export default Play;

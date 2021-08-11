import { makeStyles } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { WelcomeScreen } from '../../Game/Engine/Components/WelcomeScreen';
import { GameEngine } from '../../Game/Engine/GameEngine';
import { Game } from "../../Game/Engine/TestData/PrototypeGame";
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


  // useEffect(() => {
  //   gameEngine.renderer.showGridLines(false);
  //   gameEngine.start();
  // }, []);

  useEffect(() => {
    gameEngine.mountedGame = Game;
    gameEngine.renderer.showGridLines(false);
    gameEngine.objects.push(new WelcomeScreen());
    gameEngine.renderer.gridX = 60;
    gameEngine.start();
  }, []);

  return (
    <div className={classes.root}>
      <GameEngine />
    </div>
  );
}

export default Play;

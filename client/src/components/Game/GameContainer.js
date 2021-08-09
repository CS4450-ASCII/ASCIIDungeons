import { makeStyles, withTheme } from '@material-ui/core';
import React, { useContext, useEffect, useRef } from 'react';
import { EditorContext } from '../Pages/Create/Editor/Editor';
import { GameEngine } from './Engine/GameEngine';

function GameContainer(props) {
  const classes = useStyles();
  const { currentObject } = props;

  const { currentGame, currentLevel } = useContext(EditorContext);
  // const [gameEngine] = useState(new GameEngine());
  // const [cursor] = useState(new Cursor(gameEngine));
  const gameEngine = useRef();

  // TODO: Add this back in to connect the editor to the game engine.
  useEffect(() => {
    // if (currentLevel) {
    // gameEngine.addObject(cursor);
    gameEngine.current = new GameEngine(currentGame, currentLevel);
    gameEngine.current.renderer.showGridLines(true);
    gameEngine.current.start();
    // }
  }, []);

  return <div id='gameContainer' className={classes.GameContainerRoot}></div>;
}

const useStyles = makeStyles((theme) => ({
  GameContainerRoot: {
    marginTop: 12,
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
}));

GameContainer.propTypes = {};

GameContainer.defaultProps = {};

export default withTheme(GameContainer);

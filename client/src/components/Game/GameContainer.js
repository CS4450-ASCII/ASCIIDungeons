import { makeStyles, withTheme } from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../Pages/Create/Editor/Editor';

function GameContainer(props) {
  const classes = useStyles();
  const { currentObject } = props;

  const { currentGame, currentLevel } = useContext(GameContext);

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

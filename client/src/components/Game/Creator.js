import { makeStyles, withTheme } from '@material-ui/core';
import React, { useContext } from 'react';
import { GameContext } from '../Pages/Create/Editor/Editor';

function Creator(props) {
  const classes = useStyles();
  const { currentObject } = props;

  const { currentGame, currentLevel } = useContext(GameContext);

  return currentLevel ? (
    <div id='gameContainer' className={classes.creatorRoot}>
      <canvas id='gameCanvas' className={classes.canvas}></canvas>
    </div>
  ) : (
    <div className={classes.noLevelMessage}>No Level Selected</div>
  );
}

const useStyles = makeStyles((theme) => ({
  creatorRoot: {
    marginTop: 12,
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'bottom',
  },
  canvas: {
    border: '2px solid red',
  },
  noLevelMessage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

Creator.propTypes = {};

Creator.defaultProps = {};

export default withTheme(Creator);

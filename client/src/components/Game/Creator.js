import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';

function Creator(props) {
  const classes = useStyles();
  const { currentLevel, currentObject } = props;

  return (
    <div id='gameContainer' className={classes.creatorRoot}>
      <canvas id='gameCanvas' className={classes.canvas}></canvas>
    </div>
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
}));

Creator.propTypes = {};

Creator.defaultProps = {};

export default withTheme(Creator);

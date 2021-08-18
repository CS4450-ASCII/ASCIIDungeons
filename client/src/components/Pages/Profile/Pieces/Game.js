import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: '20%',
    padding: '10px',
  },
  container: {
    width: '100%',
    height: '100%',
    border: '3px solid white',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  goodRating: {
    color: '#00FF00',
  },
  mehRating: {
    color: '#FFFF00',
  },
  badRating: {
    color: '#FF0000',
  },
});

function Game(props) {
  const classes = useStyles();
  const { displayName, title, description } = props;

  const rating = Math.ceil(Math.random() * 100);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p title={description}>{title}</p>
        <p>By: {displayName}</p>
      </div>
    </div>
  );
}

export default Game;

import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
    padding: '10px',
    cursor: 'pointer',
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
  const { displayName, title, description, id, isPublished } = props;

  const history = useHistory();

  const onClick = (e) => {
    history.push(`/play/${id}`);
  };
  const rating = Math.ceil(Math.random() * 100);

  if (!isPublished) return null;

  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.container}>
        <p title={description}>{title}</p>
        <p>By: {displayName}</p>
      </div>
    </div>
  );
}

export default Game;

import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useCurrentUser } from '../../../../helpers/customHooks';

const useStyles = makeStyles({
  root: {
    width: "20%",
    padding: "10px"
  },
  container: {
    width: "100%",
    height: "100%",
    border: "3px solid white",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  goodRating: {
    color: "#00FF00"
  },
  mehRating: {
    color: "#FFFF00"
  },
  badRating: {
    color: "#FF0000"
  }
});

function Game(props){
  const classes = useStyles();
  const {} = props;

  const desc1 = ["Very", "Super"];
  const desc2 = ["Cool", "Dumb"];

  const { currentUser } = useCurrentUser();

  const { displayName, email } = currentUser || {};

  const rating = Math.ceil(Math.random()*100);

  return <div className={classes.root}>
    <div className={classes.container}>
      <p>{desc1[Math.round(Math.random())]} {desc2[Math.round(Math.random())]} Game</p>
      <p>By: {displayName || email || 'Adventurer'}</p>
      <p><span className={rating > 75 ? classes.goodRating : rating > 50 ? classes.mehRating : classes.badRating}>{rating}%</span>/{Math.ceil(Math.random()*999)}</p>
    </div>
  </div>;
}

export default Game;
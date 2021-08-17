import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  line: {
    width: "100%",
    textAlign: "center"
  },
  leftCol: {
    width: "33%",
    textAlign: "left"
  },
  centerCol: {
    width: "33%",
    textAlign: "center"
  },
  rightCol: {
    width: "33%",
    textAlign: "right"
  }
});

function Stats(props){
  const classes = useStyles();
  const { gamesPlayed, itemsFound, gamesMade, gamesBeaten, enemiesKilled, totalPlays } = props;

  return <div className={classes.root}>
    <div className={classes.line}><h3>Stats</h3></div>
    <div className={classes.leftCol}><p>Games Played: { gamesPlayed || 0 }</p></div>
    <div className={classes.centerCol}><p>Items Found: { itemsFound || 0 }</p></div>
    <div className={classes.rightCol}><p>Games Made: { gamesMade || 0 }</p></div>
    <div className={classes.leftCol}><p>Games Beaten: { gamesBeaten || 0 }</p></div>
    <div className={classes.centerCol}><p>Enemies Killed: { enemiesKilled || 0 }</p></div>
    <div className={classes.rightCol}><p>Total Plays: { totalPlays || 0 }</p></div>
  </div>;
}

export default Stats;
import React from 'react';
import { makeStyles } from '@material-ui/core';

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
  const {} = props;

  return <div className={classes.root}>
    <div className={classes.line}><h3>Stats</h3></div>
    <div className={classes.leftCol}><p>Games Played: {(Math.ceil(Math.random()*999))}</p></div>
    <div className={classes.centerCol}><p>Items Found: {(Math.ceil(Math.random()*999))}</p></div>
    <div className={classes.rightCol}><p>Games Made: {(Math.ceil(Math.random()*999))}</p></div>
    <div className={classes.leftCol}><p>Games Beaten: {(Math.ceil(Math.random()*999))}</p></div>
    <div className={classes.centerCol}><p>Enemies Killed: {(Math.ceil(Math.random()*999))}</p></div>
    <div className={classes.rightCol}><p>Total Plays: {(Math.ceil(Math.random()*999))}</p></div>
  </div>;
}

export default Stats;
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  line: {
    width: "100%",
    textAlign: "center"
  },
  score: {
    fontSize: "40px"
  }
});

function Score(props){
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}>
    <div className={classes.line}><h3>Score</h3></div>
    <div className={classes.line}><h1 className={classes.score}>{(Math.ceil(Math.random()*9999999999))}</h1></div>
  </div>;
}

export default Score;
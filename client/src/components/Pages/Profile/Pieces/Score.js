import { makeStyles } from '@material-ui/core';
import React from 'react';

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
  const { score } = props;

  return <div className={classes.root}>
    <div className={classes.line}><h3>Score</h3></div>
    <div className={classes.line}><h1 className={classes.score}>{ score || 0}</h1></div>
  </div>;
}

export default Score;
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {},
  line: {
    width: "100%",
    textAlign: "center"
  }
});

function Username(props){
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}>
    <div className={classes.line}><h1>{props.displayName || 'Adventurer'}</h1></div>
    <div className={classes.line}><h3>{props.email}</h3></div>
  </div>;
}

export default Username;
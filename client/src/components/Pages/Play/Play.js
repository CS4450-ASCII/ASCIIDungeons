import { makeStyles } from '@material-ui/core';
import React from 'react';
import Creator from "../../Game/Creator";

const useStyles = makeStyles({
  root: {}
});

function Play(props) {
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}><Creator /></div>;
}

export default Play;

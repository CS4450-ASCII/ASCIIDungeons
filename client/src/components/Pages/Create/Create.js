import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {}
});

function Create(props) {
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}></div>;
}

export default Create;
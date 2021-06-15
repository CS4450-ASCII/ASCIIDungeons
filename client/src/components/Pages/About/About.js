import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {}
});

function About(props) {
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}></div>;
}

export default About;

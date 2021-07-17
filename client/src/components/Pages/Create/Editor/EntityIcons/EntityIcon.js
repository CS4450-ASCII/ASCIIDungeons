import React from 'react';
import { makeStyles } from '@material-ui/core';

function EntityIcon(props){
  const classes = useStyles();
  const {character = '', isHighlighted = false, ...rest } = props;

  if(isHighlighted){
    return (
      <div className={classes.highlighted}>{character}</div>
    )
  }
  else {
    return (
      <div>{character}</div>
    )
  }
  
}

const useStyles = makeStyles({
  root: {},
  highlighted: {
    background: "#DDDDDD"
  }
});

export default EntityIcon;
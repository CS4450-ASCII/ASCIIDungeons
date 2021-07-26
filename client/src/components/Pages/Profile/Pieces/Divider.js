import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderBottom: "2px dashed white",
    display: "block"
  }
});

function Divider(props){
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}></div>;
}

export default Divider;
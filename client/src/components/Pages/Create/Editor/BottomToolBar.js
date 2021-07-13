import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "30px"
  },
  content: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  spacer: {
    width: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  largeSpacer: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonInstruction: {
    color: "black",
    backgroundColor: "lightgrey",
    height: "25px",
    width: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    display: "inline-block"
  }
});

function BottomToolBar(props){
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}>
    <div className={classes.content}><div>{"{Game Title}"}</div></div>
    <div className={classes.spacer}><div>{">"}</div></div>
    <div className={classes.content}><div>{"{Level Title}"}</div></div>
    <div className={classes.largeSpacer}></div>
    <div className={classes.content}><div><div className={classes.buttonLabel}><div className={classes.buttonInstruction}>D</div></div>{" - Draw"}</div></div>
    <div className={classes.content}><div><div className={classes.buttonLabel}><div className={classes.buttonInstruction}>E</div></div>{" - Erase"}</div></div>
  </div>;
}

export default BottomToolBar;
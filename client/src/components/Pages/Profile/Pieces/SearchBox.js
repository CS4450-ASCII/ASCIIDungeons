import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {},
  line: {
    width: "100%",
    textAlign: "center"
  }
});

function SearchBox(props){
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <div className={classes.line}><h1>User Search:</h1><TextField id="user-search" label="Username" /></div>
    </div>
  );
}

export default SearchBox;
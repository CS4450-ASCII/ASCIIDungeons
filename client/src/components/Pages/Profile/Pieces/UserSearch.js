import { makeStyles } from '@material-ui/core';
import React from 'react';
import SearchBox from './SearchBox';

const useStyles = makeStyles({
  root: {},
  line: {
    width: "100%",
    textAlign: "center"
  }
});

function UserSearch(props){
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <SearchBox />
    </div>
  );
}

export default UserSearch;
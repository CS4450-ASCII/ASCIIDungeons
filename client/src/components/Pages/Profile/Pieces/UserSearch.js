import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Divider from './Divider';
import Games from './Games';
import SearchBox from './SearchBox';
import SearchedUsername from './SearchedUsername';

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

  const { searchedUser, setSearchedUser } = useState({});

  if(searchedUser){
    return (
      <div className={classes.root}>
        <SearchBox />
        <SearchedUsername displayName={searchedUser.displayName}/>
        <Divider />
        <Games />
      </div>
    );
  }
  else{
    return (
      <div className={classes.root}>
        <SearchBox />
      </div>
    );
  }

  
}

export default UserSearch;
import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userGraphql } from '../../../../graphql/user';
import { useQueryWithError } from '../../../../helpers/customHooks';

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
  
  const history = useHistory();

  const [ currentSearch, setCurrentSearch ] = useState("");

  const { loading, data, refetch } = useQueryWithError(
    userGraphql.USERS
  );

  const handleClick = (event) => {
    data.users.map(user => {
      if(user.displayName === currentSearch){
        // If there is a User that matches the current search, redirect to their profile page:
        history.push(`/users/${user.id}`);
      }
      else {
        // TODO: Handle displaying error message
      }
    })
  };

  const handleTextChange = (event) => {
    setCurrentSearch(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.line}><h1>User Search:</h1><TextField id="user-search" label="Username"  value={currentSearch} onChange={handleTextChange}/></div>
      <Button className={classes.line} onClick={handleClick}>Search</Button>
    </div>
  );
}

export default SearchBox;
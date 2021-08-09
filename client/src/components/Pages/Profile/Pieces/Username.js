import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useCurrentUser } from '../../../../helpers/customHooks';

const useStyles = makeStyles({
  root: {},
  line: {
    width: "100%",
    textAlign: "center"
  }
});

function Username(props){
  const classes = useStyles();
  const {} = props;

  const { currentUser } = useCurrentUser();

  const { displayName, email } = currentUser || {};

  return <div className={classes.root}>
    <div className={classes.line}><h1>{displayName || 'Adventurer'}</h1></div>
    <div className={classes.line}><h3>{email}</h3></div>
  </div>;
}

export default Username;
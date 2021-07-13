import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useCurrentUser } from '../../../../helpers/customHooks';

const useStyles = makeStyles({
  root: {}
});

function Username(props){
  const classes = useStyles();
  const {} = props;

  const { currentUser } = useCurrentUser();

  const { displayName, email } = currentUser || {};

  return <h1>{displayName || email || 'Adventurer'}</h1>;
}

export default Username;
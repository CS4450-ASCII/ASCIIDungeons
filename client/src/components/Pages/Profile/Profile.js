import { makeStyles } from '@material-ui/core';
import React from 'react';
import Username from './Pieces/Username';
import Divider from './Pieces/Divider';
import Score from './Pieces/Score';
import Stats from './Pieces/Stats';
import Games from './Pieces/Games';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

function Profile(props) {
  const classes = useStyles();
  const {} = props;

  //TODO: Go into each subcomponent and replace dummy data with real data.
  return (
    <div className={classes.root}>
      <Username />
      <Divider />
      <Score />
      <Divider />
      <Stats />
      <Divider />
      <Games />
    </div>
  );
}

export default Profile;

import React, {useState} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EntityIcon from './EntityIcon';
import { grey } from '@material-ui/core/colors';

function EntityIconGroup(props){
  const classes = useStyles();

  
  // DUMMY DATA. Replace with destructuring: const { characters } = props;
  // const { characters } = props;
  const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '\\', '/'];


  const entityIcons = characters.map((character) =>
    <Grid item xs={3}>
      <EntityIcon character={character}></EntityIcon>
    </Grid>
  );

  return (
    <div className={classes.mainContainer}>
    <Grid container spacing={2} align="center" justify="center" alignItems="center">
      <Grid item xs={3}><EntityIcon character='X' isHighlighted={true}></EntityIcon></Grid>
      {entityIcons}
    </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  mainContainer: {
    background: "grey"
  }
});

export default EntityIconGroup;
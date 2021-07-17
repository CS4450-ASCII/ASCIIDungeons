import React, {useState} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EntityIcon from './EntityIcon';
import { grey } from '@material-ui/core/colors';

function EntityIconGroup(props){
  const classes = useStyles();

  //TODO:
  //Replace with Context? Makes it easier for other parts of the editor to
  //know which character is currently selected.
  const { selectedCharacter, setSelectedCharacter } = useState('');

  // DUMMY DATA. Replace with destructuring: const { characters } = props;
  // const { characters } = props;
  const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '\\', '/'];


  const entityIcons = characters.map((character) => {
      if(selectedCharacter === character) {
        return (
          <Grid item xs={3} isHighlighted={true}>
            <EntityIcon character={character}></EntityIcon>
          </Grid>
        )
      } else {
        return (
          <Grid item xs={3} isHighlighted={false}>
            <EntityIcon character={character}></EntityIcon>
          </Grid>
        )
      }
    }
  );

  return (
    <div className={classes.mainContainer}>
      <Grid container spacing={2} align="center" justify="center" alignItems="center">
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
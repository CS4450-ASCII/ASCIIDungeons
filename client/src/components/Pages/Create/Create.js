import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import FinalStatsDialog from './Editor/Dialogs/FinalStatsDialog';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';

const useStyles = makeStyles({
  root: {
    '& .MuiGrid-item': {
      height: 100
    }
  }
});

function Create(props) {
  const classes = useStyles();
  const {} = props;

  const [game, setGame] = useState();

  return (
    <div className={classes.root}>
      {/* Toolbar */}
      {!game && (
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <NewGameDialog openButton={<Button>New Game</Button>} />
          </Grid>
          <Grid item>
            <OpenGameDialog openButton={<Button>Open</Button>} />
          </Grid>
          <Grid item>
            <FinalStatsDialog openButton={<Button>Score</Button>} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Create;

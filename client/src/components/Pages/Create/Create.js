import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import NewGameDialog from './Editor/NewGameDialog';
import OpenGameDialog from './Editor/OpenGameDialog';

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
        </Grid>
      )}
    </div>
  );
}

export default Create;

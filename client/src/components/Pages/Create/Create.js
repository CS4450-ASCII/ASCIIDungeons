import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import NewGameDialog from './Editor/NewGameDialog';
import NewLevelDialog from './Editor/NewLevelDialog';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 400
  }
});

function Create(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <NewGameDialog openButton={<Button>New Game</Button>} />
      <br />
      <NewLevelDialog
        openButton={<Button>New Level (here for testing)</Button>}
      />
    </div>
  );
}

export default Create;

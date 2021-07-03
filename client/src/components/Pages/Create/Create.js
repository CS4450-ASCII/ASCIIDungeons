import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import NewGameDialog from './Editor/NewGameDialog';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    </div>
  );
}

export default Create;

import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import GameListGamesContainer from './GameListGames';

const useStyles = makeStyles({
  root: {
    width: '0px',
    float: 'left',
    left: '-500px',
  },
  line: {
    width: '100%',
    textAlign: 'left',
  },
});

function clearDiv(){
  return(
    <div>

    </div>
  )
}

function showA(props) {
  const { games, ...rest } = props;

  return (
    <div>
    {games.filter(game => game.includes('A')).map(filteredGames =>(
      <p>
        {filteredGames}
      </p>
    ))}
  </div>
  )
}

  // function showB() {
  //   setfilteredGames(B);
  // }

  // function showC() {
  //   setfilteredGames(C);
  // }

  // function showT() {
  //   setfilteredGames(T);
  // }

function Filter(props) {
  const classes = useStyles();
  const { games, ...rest } = props;


  {/* Add on click filtering */}
  return (
    <div className={classes.root}>
      <ButtonGroup orientation='vertical'>
        <Button size='small' className={classes.root} onClick={() => { clearDiv(); showA()}}>
          A
        </Button>
        <Button size='small' className={classes.root}>
          B
        </Button>
        <Button size='small' className={classes.root}>
          C
        </Button>
        <Button size='small' className={classes.root}>
          D
        </Button>
        <Button size='small' className={classes.root}>
          E
        </Button>
        <Button size='small' className={classes.root}>
          F
        </Button>
        <Button size='small' className={classes.root}>
          G
        </Button>
        <Button size='small' className={classes.root}>
          H
        </Button>
        <Button size='small' className={classes.root}>
          I
        </Button>
        <Button size='small' className={classes.root}>
          J
        </Button>
        <Button size='small' className={classes.root}>
          K
        </Button>
        <Button size='small' className={classes.root}>
          L
        </Button>
        <Button size='small' className={classes.root}>
          M
        </Button>
        <Button size='small' className={classes.root}>
          N
        </Button>
        <Button size='small' className={classes.root}>
          O
        </Button>
        <Button size='small' className={classes.root}>
          P
        </Button>
        <Button size='small' className={classes.root}>
          Q
        </Button>
        <Button size='small' className={classes.root}>
          R
        </Button>
        <Button size='small' className={classes.root}>
          S
        </Button>
        <Button size='small' className={classes.root}>
          T
        </Button>
        <Button size='small' className={classes.root}>
          U
        </Button>
        <Button size='small' className={classes.root}>
          V
        </Button>
        <Button size='small' className={classes.root}>
          W
        </Button>
        <Button size='small' className={classes.root}>
          X
        </Button>
        <Button size='small' className={classes.root}>
          Y
        </Button>
        <Button size='small' className={classes.root}>
          Z
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;

import { makeStyles } from '@material-ui/core';
import React from 'react';
import Game from './Game';

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  line: {
    width: "100%",
    textAlign: "center"
  }
});

function Games(props){
  const classes = useStyles();
  const {} = props;

  const games = props.games || ["","","",""];

  return <div className={classes.root}>
    <div className={classes.line}><h3>Games</h3></div>
    {games.map((game) => <Game />)}
  </div>;
}

export default Games;
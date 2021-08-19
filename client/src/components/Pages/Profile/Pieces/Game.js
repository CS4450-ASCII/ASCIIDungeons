import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "20%",
    padding: "10px"
  },
  container: {
    width: "100%",
    height: "100%",
    border: "3px solid white",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  unstyledLink: {
    color: "white",
    textDecoration: "none",
    '&:hover':{
      textDecoration: "none"
    }, '&:focus': {
      textDecoration: "none"
    }, '&:visited': {
      textDecoration: "none"
    }, '&:link': {
      textDecoration: "none"
    }, '&:active': {
      textDecoration: "none"
    }
  },
  goodRating: {
    color: "#00FF00"
  },
  mehRating: {
    color: "#FFFF00"
  },
  badRating: {
    color: "#FF0000"
  }
});

function Game(props){
  const classes = useStyles();
  const { displayName, title, description, id} = props;

  const rating = Math.ceil(Math.random()*100);

  return <div className={classes.root}>
    <Link className={classes.unstyledLink} to={("/play/" + id) }>
      <div className={classes.container}>
        <p className={classes.unstyledLink}>{ title }</p>
        <p className={classes.unstyledLink}>By: { displayName }</p>
        <p className={classes.unstyledLink}>{ description }</p>
      </div>
    </Link>
  </div>;
}

export default Game;
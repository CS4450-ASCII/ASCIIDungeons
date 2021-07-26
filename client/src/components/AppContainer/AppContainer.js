import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from '../Pages/About/About';
import Create from '../Pages/Create/Create';
import MainMenu from '../Pages/MainMenu/MainMenu';
import Play from '../Pages/Play/Play';
import Profile from '../Pages/Profile/Profile';
import Score from '../Pages/Score/Score';

const useStyles = makeStyles({
  root: {}
});

function AppContainer(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/create' component={Create} />
        <Route exact path='/play' component={Play} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/about' component={About} />
        <Route exact path='/score' component={Score} />
        <Route path='/main' component={MainMenu} />
        <Redirect to='/main' />
      </Switch>
    </div>
  );
}

export default AppContainer;

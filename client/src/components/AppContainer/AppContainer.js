import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from '../Pages/About/About';
import Create from '../Pages/Create/Create';
import MainMenu from '../Pages/MainMenu/MainMenu';
import PlayGame from '../Pages/Play/PlayGame';
import Profile from '../Pages/Profile/Profile';

function AppContainer(props) {
  const {} = props;

  return (
    <Switch>
      <Route path='/create' component={Create} />
      <Route path='/play/:gameId' component={PlayGame} />
      {/* <Route exact path='/play' component={Play} /> */}
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/about' component={About} />
      <Route exact path='/main' component={MainMenu} />
      <Redirect to='/main' />
    </Switch>
  );
}

export default AppContainer;

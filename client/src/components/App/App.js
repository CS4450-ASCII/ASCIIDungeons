import { userRequests } from '../../requests/user';
import LoginPage from '../Authentication/LoginPage/LoginPage';
import AppContainer from '../AppContainer/AppContainer';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import figlet from 'figlet';
import Slant from 'figlet/importable-fonts/Slant';
import SmSlant from 'figlet/importable-fonts/Small Slant';

figlet.parseFont('Slant', Slant);
figlet.parseFont('SmSlant', SmSlant);

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'IBMBios',
    width: '100vw',
    height: '100vh'
  }
});

function App() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(userRequests.CURRENT_USER);

  if (error) return `Error occurred: ${error.message}`;

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/signup'>
          Sign up page
        </Route>
        <Route path='/'>
          {_.get(data, 'currentUser') ? <AppContainer /> : <LoginPage />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

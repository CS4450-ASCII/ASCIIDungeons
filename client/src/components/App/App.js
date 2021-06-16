import { makeStyles } from '@material-ui/core';
import figlet from 'figlet';
import Slant from 'figlet/importable-fonts/Slant';
import SmSlant from 'figlet/importable-fonts/Small Slant';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useCurrentUser } from '../../helpers/custom_hooks';
import AppContainer from '../AppContainer/AppContainer';
import LoginPage from '../Authentication/LoginPage';
import SignUpPage from '../Authentication/SignUpPage';
import SignUpForm from '../Authentication/SignUpPage';
import PageFooter from '../Common/PageFooter';
import PageHeader from '../Common/PageHeader';

figlet.parseFont('Slant', Slant);
figlet.parseFont('SmSlant', SmSlant);

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    width: '100vw'
  },
  container: {
    color: 'white',
    fontFamily: 'IBMBios',
    maxWidth: '1536px',
    margin: 'auto',
    height: '100vh',
    width: '100%'
  }
});

function App() {
  const classes = useStyles();

  const { loading, error, currentUser } = useCurrentUser();

  if (error) return `Error occurred: ${error.message}`;

  return (
    <div className={classes.root}>
      {!loading && (
        <div className={classes.container}>
          <PageHeader text='ASCII Dungeons' />
          <Switch>
            <Route exact path='/signup'>
              {currentUser ? <Redirect to='/main' /> : <SignUpPage />}
            </Route>
            <Route exact path='/login'>
              {currentUser ? <Redirect to='/main' /> : <LoginPage />}
            </Route>
            <Route path='/'>
              {currentUser ? <AppContainer /> : <Redirect to='/login' />}
            </Route>
          </Switch>
          <PageFooter />
        </div>
      )}
    </div>
  );
}

export default App;

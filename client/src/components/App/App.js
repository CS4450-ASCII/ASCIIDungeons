import { makeStyles } from '@material-ui/core';
import figlet from 'figlet';
import Slant from 'figlet/importable-fonts/Slant';
import SmSlant from 'figlet/importable-fonts/Small Slant';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useCurrentUser } from '../../helpers/customHooks';
import AppContainer from '../AppContainer/AppContainer';
import LoginPage from '../Authentication/LoginPage';
import SignUpPage from '../Authentication/SignUpPage';
import PageFooter from '../Common/PageFooter';
import PageHeader from '../Common/PageHeader';

figlet.parseFont('Slant', Slant);
figlet.parseFont('SmSlant', SmSlant);

const useStyles = makeStyles({
  appRoot: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
  },
  container: {
    color: 'white',
    fontFamily: 'IBMBios',
    margin: 'auto',
    maxWidth: '1536px',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '1em',
    flexDirection: 'column',
    width: '100%',
    overflow: 'auto',
  },
});

function App() {
  const classes = useStyles();

  const { loading, error, currentUser } = useCurrentUser();

  if (error) return `Error occurred: ${error.message}`;

  return (
    <div className={classes.appRoot}>
      {!loading && (
        <div className={classes.container}>
          <PageHeader text='ASCII Dungeons' />
          <main className={classes.mainContent}>
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
          </main>
          <PageFooter />
        </div>
      )}
    </div>
  );
}

export default App;

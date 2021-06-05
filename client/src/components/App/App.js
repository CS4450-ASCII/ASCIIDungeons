import { makeStyles } from '@material-ui/core';
import figlet from 'figlet';
import Slant from 'figlet/importable-fonts/Slant';
import SmSlant from 'figlet/importable-fonts/Small Slant';
import { Route, Switch } from 'react-router-dom';
import { useCurrentUser } from '../../helpers/hooks';
import AppContainer from '../AppContainer/MainMenu';
import LoginPage from '../Authentication/LoginPage/LoginPage';
import PageFooter from '../Common/PageFooter';
import PageHeader from '../Common/PageHeader';

figlet.parseFont('Slant', Slant);
figlet.parseFont('SmSlant', SmSlant);

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'stretch'
  },
  container: {
    color: 'white',
    fontFamily: 'IBMBios',
    width: '100vw',
    maxWidth: '1536px',
    margin: 'auto',
    height: '100vh'
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
              Sign up page
            </Route>
            <Route path='/'>
              {currentUser ? <AppContainer /> : <LoginPage />}
            </Route>
          </Switch>
          <PageFooter />
        </div>
      )}
    </div>
  );
}

export default App;

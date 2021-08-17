import { Button, Grid, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  mainMenuRoot: {
    height: '100%',
  },
  navItem: {
    height: 100,
  },
});

function MainMenu(props) {
  const classes = useStyles();
  const {} = props;

  const history = useHistory(); // https://reactrouter.com/web/api/Hooks

  const navLinks = ['create', 'play', 'profile', 'about'];

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      direction='column'
      className={classes.mainMenuRoot}
    >
      {navLinks.map(link => (
        <Grid item key={`nav-link-${link}`} className={classes.navItem}>
          <Button onClick={() => history.push(link)}>
            {_.startCase(link)}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainMenu;

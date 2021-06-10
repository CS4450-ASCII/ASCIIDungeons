import React, { useMemo } from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import _ from 'lodash';

const useStyles = makeStyles({
  navItem: {
    height: 100
  }
});

function MainMenu(props) {
  const classes = useStyles();
  const {} = props;

  const history = useHistory(); // https://reactrouter.com/web/api/Hooks

  const navLinks = useMemo(
    // https://reactjs.org/docs/hooks-reference.html#usememo
    () => ['create', 'play', 'profile', 'about'],
    []
  );

  return (
    <Grid container alignItems='center' direction='column'>
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

import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';
import EditorBody from './Editor/EditorBody';
import Toolbar from './Editor/Toolbar/Toolbar';

function Create(props) {
  const classes = useStyles();

  const { path, url } = useRouteMatch();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='space-between'
      className={classes.createRoot}
    >
      <Grid item>
        <Toolbar />
      </Grid>
      <Switch>
        <Route exact path={path}>
          <Grid
            item
            container
            alignItems='center'
            direction='column'
            className={classes.menuItemContainer}
          >
            <NewGameDialog />
            <OpenGameDialog />
          </Grid>
          <Grid item />
        </Route>
        <Route path={`${path}/:gameId/:levelId?`}>
          <EditorBody />
        </Route>
        <Redirect to={path} />
      </Switch>
    </Grid>
  );
}

const useStyles = makeStyles({
  createRoot: {
    '& .MuiGrid-item': {
      width: '100%',
    },
    width: '100%',
    height: '100%',
    maxWidth: 1000,
    maxHeight: 1000,
    border: '1px solid white',
  },
  menuItemContainer: {
    '& .MuiButton-root': {
      height: 80,
    },
  },
});

export default Create;

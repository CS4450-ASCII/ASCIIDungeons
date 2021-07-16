import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';
import {
  Redirect,
  Switch,
  Route,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import EditorBody from './Editor/EditorBody';
import BottomToolbar from './Editor/BottomToolbar/BottomToolbar';

const useStyles = makeStyles({
  createRoot: {
    '& .MuiGrid-item': {
      width: '100%',
      border: '1px solid green'
    },
    width: '100%',
    height: '100%',
    maxWidth: 1000,
    maxHeight: 1000,
    border: '1px solid white'
  },
  menuItemContainer: {
    '& .MuiButton-root': {
      height: 80
    }
  },
  editorBody: {
    '& .MuiGrid-item': {
      border: '1px solid green'
    }
  }
});

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
      <Grid item>{'<Toolbar />'}</Grid>
      <Switch>
        <Route exact path={path}>
          <Grid
            item
            container
            alignItems='center'
            direction='column'
            className={classes.menuItemContainer}
          >
            <NewGameDialog openButton={<Button>New Game</Button>} />
            <OpenGameDialog openButton={<Button>Open</Button>} />
          </Grid>
          <Grid item />
        </Route>
        <Route path={`${path}/:gameId`}>
          <EditorBody />
        </Route>
        <Redirect to={path} />
      </Switch>
    </Grid>
  );
}

export default Create;

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
    maxWidth: 900,
    maxHeight: 900,
    border: '1px solid white'
  }
});

function Create(props) {
  const classes = useStyles();

  const [game, setGame] = useState();

  const { path, url } = useRouteMatch();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='space-between'
      className={classes.createRoot}
    >
      <Grid item> hi</Grid>
      {/* Toolbar */}
      <Switch>
        <Route exact path={path}>
          <Grid item>
            <NewGameDialog openButton={<Button>New Game</Button>} />
          </Grid>
          <Grid item>
            <OpenGameDialog openButton={<Button>Open</Button>} />
          </Grid>
        </Route>
        <Route path={`${path}/:gameId`}>
          <Grid item>
            <BottomToolbar gameTitle={'Game 1'} levelTitle={'Level 1'} />
          </Grid>
        </Route>
        <Redirect to={path} />
      </Switch>
    </Grid>
  );
}

export default Create;

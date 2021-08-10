<<<<<<< HEAD
import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import FinalStatsDialog from './Editor/Dialogs/FinalStatsDialog';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';

const useStyles = makeStyles({
  root: {
    '& .MuiGrid-item': {
      height: 100
    }
  }
});
=======
import { Grid, makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import { useQueryWithError } from '../../../helpers/customHooks';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';
import Editor from './Editor/Editor';
>>>>>>> origin/play-game

function Create(props) {
  const classes = useStyles();
  const { path } = useRouteMatch();

  const { loading, data } = useQueryWithError(gameGraphql.QUERY_GAMES);

  if (loading) return <div>Loading...</div>;

  return (
<<<<<<< HEAD
    <div className={classes.root}>
      {/* Toolbar */}
      {!game && (
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <NewGameDialog openButton={<Button>New Game</Button>} />
          </Grid>
          <Grid item>
            <OpenGameDialog openButton={<Button>Open</Button>} />
          </Grid>
          <Grid item>
            <FinalStatsDialog openButton={<Button>Score</Button>} />
          </Grid>
        </Grid>
      )}
    </div>
=======
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='space-between'
      className={classes.createRoot}
    >
      <Switch>
        <Route exact path={path}>
          <Grid item />
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
        <Route path={`${path}/:gameId/:levelIndex?`}>
          <Editor />
        </Route>
        <Redirect to={path} />
      </Switch>
    </Grid>
>>>>>>> origin/play-game
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

Create.propTypes = {};

Create.defaultProps = {};

export default withTheme(Create);

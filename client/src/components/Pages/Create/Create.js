import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { themeVariables } from '../../../muiAsciiTheme';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';
import EditorBody from './Editor/EditorBody';

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
        <div
          style={{
            height: 30,
            backgroundColor: themeVariables.palette.gray.light,
            color: 'black',
          }}
        >
          {'<Toolbar />'}{' '}
        </div>
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
            <NewGameDialog openButton={<Button>New Game</Button>} />
            <OpenGameDialog openButton={<Button>Open</Button>} />
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

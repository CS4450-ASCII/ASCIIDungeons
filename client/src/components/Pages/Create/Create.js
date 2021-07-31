import { Grid, makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { graphqlGame } from '../../../graphql/game';
import { useQueryWithError } from '../../../helpers/customHooks';
import NewGameDialog from './Editor/Dialogs/NewGameDialog';
import OpenGameDialog from './Editor/Dialogs/OpenGameDialog';
import Editor from './Editor/Editor';

function Create(props) {
  const classes = useStyles();
  const { path } = useRouteMatch();

  const { loading, data } = useQueryWithError(graphqlGame.QUERY_GAMES);

  if (loading) return <div>Loading...</div>;

  return (
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
        <Route path={`${path}/:gameId/:levelId?`}>
          <Editor />
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

Create.propTypes = {};

Create.defaultProps = {};

export default withTheme(Create);

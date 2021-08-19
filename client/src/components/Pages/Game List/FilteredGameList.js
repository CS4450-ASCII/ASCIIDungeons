import { Button, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import { useQueryWithError } from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';

const useStyles = makeStyles({
  root: {
    padding: '10px',
  },
  container: {
    width: '100%',
    height: '100%',
    border: '3px solid white',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

function FilteredGamesContainer(props) {
  const { data, loading } = useQueryWithError(gameGraphql.QUERY_GAMES, {
    fetchPolicy: 'cache-first',
    variables: {
      filter: 'all',
    },
  });

  if (loading) return <LoadingContainer />;

  return <FilteredGameList {...props} games={_.get(data, 'games')} />;
}
function FilteredGameList(props) {
  const classes = useStyles();
  const { games, value, displayName, dictionary = {} } = props;
  const { path, url } = useRouteMatch();
  const history = useHistory();

  return games
    .filter((game) => game.title.startsWith(value))
    .map((filteredGame) => {
      return (
        <div className={classes.root}>
          <Button
            className={classes.container}
            value={filteredGame.id}
            onClick={(e) => {
              history.push(`/play/${filteredGame.id}`);
            }}
          >
            {filteredGame.title}
            &nbsp;By:&nbsp;{_.get(filteredGame, 'createdBy.displayName')}
          </Button>
        </div>
      );
    });
}

export default FilteredGamesContainer;

import { Button, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import {useQueryWithError} from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';
import { userGraphql } from '../../../graphql/user';
import { useParams } from 'react-router-dom';

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
  const { loading, data } = useQueryWithError(gameGraphql.QUERY_GAMES, {
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <LoadingContainer />;
  }
  
  return <FilteredGameList {...props} games={_.get(data, 'games')} />;
}


function FilteredGameList(props) {
  const classes = useStyles();
  const { games, value } = props;
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const onSubmit = () => {
    // Navigates to the play game route with specified id.
    history.replace(`/play/${_.get('id')}/${_.get('lastViewedLevel.id', '')}`);
  };

  return games
    .filter((game) => game.title.startsWith(value))
    .map((filteredGame) => (
      <div className={classes.root}>
        <Button className={classes.container} onClick={() => onSubmit()}>
          {filteredGame.title}
          {filteredGame.createdBy}
        </Button>
      </div>
    ));
}

export default FilteredGamesContainer;

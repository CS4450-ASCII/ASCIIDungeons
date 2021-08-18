import { Button, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import { useQueryWithError } from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';

const useStyles = makeStyles({
  root: {
    padding: '10px',
  },
  container: {
    width: '200%',
    height: '200%',
    border: '3px solid white',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

function GameListGamesContainer(props) {
  const { loading, data } = useQueryWithError(gameGraphql.QUERY_GAMES, {
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <LoadingContainer />;
  }

  return <GameListGames {...props} games={_.get(data, 'games')} />;
}

export function GameListGames(props) {
  const classes = useStyles();
  const { openButton, games, ...rest } = props;

  const [selectedGame, setSelectedGame] = useState(null);
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const onSubmit = () => {
    // Navigates to the play game route with specified id.
    history.replace(
      `/play/${_.get(selectedGame, 'id')}/${_.get(
        selectedGame,
        'lastViewedLevel.id',
        '',
      )}`,
    );
  };

  return games.map((game) => (
    <div className={classes.root}>
      <Button className={classes.container} onClick={() => onSubmit()}>
        {game.title} By: User
      </Button>
    </div>
  ));
}

export default GameListGamesContainer;

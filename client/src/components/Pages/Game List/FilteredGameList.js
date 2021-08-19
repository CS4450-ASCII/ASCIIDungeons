import { Button, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import { userGraphql } from '../../../graphql/user';
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
  const { data: gameData, loading: loadingGames } = useQueryWithError(
    gameGraphql.QUERY_GAMES,
    {
      fetchPolicy: 'cache-first',
    },
  );

  const { data: userData, loading: loadingUsers } = useQueryWithError(
    userGraphql.USERS,
    {
      fetchPolicy: 'cache-first',
      // onCompleted: ({ users }) => {
      //   console.log(users)
      // }
    },
  );

  // if (loadingGames || loadingUsers)  return <LoadingContainer />;

  // console.log(userData);
  // console.log(gameData);

  if (loadingGames || loadingUsers) return <LoadingContainer />;

  let dictionary = {};
  userData.users.map((user) => {
    dictionary[user.id.toString()] = user;
  });

  return (
    <FilteredGameList
      {...props}
      dictionary={dictionary}
      games={gameData.games}
    />
  );
}
function FilteredGameList(props) {
  const classes = useStyles();
  const { games, value, displayName, dictionary = {} } = props;
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const onSubmit = () => {
    // Navigates to the play game route with specified id.
    history.replace(`/play/${_.get('id')}`);
  };

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
            &nbsp;By:&nbsp;{dictionary[filteredGame.createdById].displayName}
          </Button>
        </div>
      );
    });
}

export default FilteredGamesContainer;

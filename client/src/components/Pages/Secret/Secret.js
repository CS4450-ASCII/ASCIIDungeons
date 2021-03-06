import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useCurrentUser
} from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';
import { WelcomeScreen } from '../../Game/Engine/Components/WelcomeScreen';
import GameEngine from '../../Game/Engine/GameEngine';
import { Game } from '../../Game/Engine/TestData/SecretGame';

function Secret(props) {
  const classes = useStyles();
  const { gameId } = useParams();
  const { } = props;

  const { currentUser } = useCurrentUser();
  const [mountedGame, setMountedGame] = useState(null);

  // const [gameEngine] = useState(new GameEngine());
  /*const { data, loading } = useQueryWithError(gameGraphql.QUERY_FULL_GAME, {
    variables: {
      id: gameId,
    },
    onCompleted: ({ game }) => {
      // convert game to mountedGame
      const convertedLevels = _.map(game.levels, (level) =>
        translateDBLevelToObjects(level),
      );

      const mountedGame = {
        title: game.title,
        levelIndex: -1,
        nextLevel: function () {
          this.levelIndex++;
          return this.levels[this.levelIndex];
        },
        hasNextLevel: function () {
          return !!(this.levels[this.levelIndex + 1]);
        },
        levels: convertedLevels,
      };

      setMountedGame(mountedGame);
    },
  });*/

  // useEffect(() => {}, [gameId]);

  // useEffect(() => {
  //   gameEngine.mountedGame = Game;
  //   gameEngine.renderer.showGridLines(false);
  //   gameEngine.objects.push(new WelcomeScreen());
  //   gameEngine.renderer.gridX = 60;
  //   gameEngine.start();
  // }, []);

  if (!currentUser) return <LoadingContainer />;

  return (
    <div className={classes.root}>
      <GameEngine
        mountedGame={Game}
        objects={[new WelcomeScreen()]}
        playerName={_.get(currentUser, 'displayName', 'Adventurer')}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 600,
  },
});

export default Secret;

import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import {
  useCurrentUser,
  useQueryWithError,
} from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';
import { WelcomeScreen } from '../../Game/Engine/Components/WelcomeScreen';
import GameEngine from '../../Game/Engine/GameEngine';
import { translateDBLevelToObjects } from '../../Game/Engine/Tools/Translator';

function PlayGame(props) {
  const classes = useStyles();
  const { gameId } = useParams();
  const {} = props;

  const { currentUser } = useCurrentUser();
  const [mountedGame, setMountedGame] = useState(null);

  // const [gameEngine] = useState(new GameEngine());
  const { data, loading } = useQueryWithError(gameGraphql.QUERY_FULL_GAME, {
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
        levels: convertedLevels,
      };

      setMountedGame(mountedGame);
    },
  });

  // useEffect(() => {}, [gameId]);

  // useEffect(() => {
  //   gameEngine.mountedGame = Game;
  //   gameEngine.renderer.showGridLines(false);
  //   gameEngine.objects.push(new WelcomeScreen());
  //   gameEngine.renderer.gridX = 60;
  //   gameEngine.start();
  // }, []);

  if (loading || !mountedGame || !currentUser) return <LoadingContainer />;

  return (
    <div className={classes.root}>
      <GameEngine
        mountedGame={mountedGame}
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

export default PlayGame;

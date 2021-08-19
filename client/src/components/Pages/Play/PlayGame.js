import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { gameGraphql } from '../../../graphql/game';
import {
  useCurrentUser,
  useQueryWithError
} from '../../../helpers/customHooks';
import LoadingContainer from '../../Common/LoadingContainer';
import { Player } from '../../Game/Engine/Components/Player';
import { WelcomeScreen } from '../../Game/Engine/Components/WelcomeScreen';
import GameEngine from '../../Game/Engine/GameEngine';
import { translateDBLevelToObjects } from '../../Game/Engine/Tools/Translator';
import GameList from '../Game List/GameList';

function PlayGame(props) {
  const classes = useStyles();
  const { gameId } = useParams();
  const { } = props;

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
        startLevelIndex: -1,
        player: null,
        nextLevel: function () {
          this.levelIndex++;
          return this.levels[this.levelIndex];
        },
        hasNextLevel: function () {
          return !!(this.levels[this.levelIndex + 1]);
        },
        getLevel: function (id) {
          for (const level of this.levels) {
            if(id = level.id) return level;
          }
          return null;
        },
        levels: convertedLevels,
      };

      for (const level in convertedLevels) {
        for (const object of convertedLevels[level].objects) {
          if(object instanceof Player) {
            mountedGame.player = object;
            mountedGame.startLevelIndex = level;
          }
        }
      }

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

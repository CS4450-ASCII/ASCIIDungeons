import { Grid, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gameGraphql } from '../../../../graphql/game';
import { useQueryWithError } from '../../../../helpers/customHooks';
import LoadingContainer from '../../../Common/LoadingContainer';
import { GameEngine } from '../../../Game/Engine/GameEngine';
import GameContainer from '../../../Game/GameContainer';
import BottomToolbar from './BottomToolbar/BottomToolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';

function EditorContainer(props) {
  const { gameId, levelIndex } = useParams();
  const { loading, data, refetch } = useQueryWithError(
    gameGraphql.GAME_CONTEXT,
    {
      variables: {
        gameId,
        levelIndex,
      },
    },
  );

  const [gameEngine] = useState(new GameEngine());
  // const [cursor] = useState(new Cursor(gameEngine));
  useEffect(() => {
    // rerun the query if the gameId or levelIndex change
    if (!loading) {
      refetch({ variables: { gameId, levelIndex } });
    }
  }, [gameId, levelIndex]);

  // TODO: Add this back in to connect the editor to the game engine.
  // useEffect(() => {
  //   if (currentLevel) {
  //     // gameEngine.addObject(cursor);
  //     gameEngine.renderer.showGridLines(false);
  //     gameEngine.start();
  //   }
  // }, [currentLevel]);

  if (loading) return <LoadingContainer />;

  const currentGame = _.get(data, 'gameContext.currentGame');
  const currentLevel = _.get(data, 'gameContext.currentLevel');

  return (
    <Editor
      {...{
        ...props,
        currentGame,
        currentLevel,
        currentLevelIndex: parseInt(levelIndex),
      }}
    />
  );
}

const initialState = {
  currentGame: undefined,
  currentLevel: undefined,
};

export const GameContext = createContext(initialState);

function Editor(props) {
  const classes = useStyles();
  const { currentGame, currentLevel, currentLevelIndex } = props;

  return (
    <GameContext.Provider
      value={{
        currentGame,
        currentLevel,
        currentLevelIndex,
      }}
    >
      <Grid item>
        <Toolbar />
      </Grid>
      <Grid item container className={classes.editorRoot}>
        <Grid item xs={9} style={{ height: '100%', width: '100%' }}>
          {currentLevel ? (
            <GameContainer />
          ) : (
            <div className={classes.noLevelMessage}>No Level Selected</div>
          )}
        </Grid>
        <Grid item xs={3}>
          <SideDrawer />
        </Grid>
      </Grid>
      <Grid item>
        <BottomToolbar />
      </Grid>
    </GameContext.Provider>
  );
}

const useStyles = makeStyles({
  editorRoot: {
    flex: 1,
    // '& .MuiGrid-item': {
    //   border: '1px solid red',
    // },
  },
  noLevelMessage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditorContainer;

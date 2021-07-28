import { Grid, makeStyles } from '@material-ui/core';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyGameData } from '../../../../stories/dummyData';
import Creator from '../../../Game/Creator';
import { Cursor } from '../../../Game/Engine/Components/Cursor';
import { GameEngine } from '../../../Game/Engine/GameEngine';
import BottomToolbar from './BottomToolbar/BottomToolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';

function EditorContainer(props) {
  const { gameId, levelId } = useParams();
  const [currentGame, setCurrentGame] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);

  useEffect(() => {
    /* TODO: Query for the game that has id of gameId 
    query shape:
    game {
      id
      title
      description
      levels {
        id
        title
      }
      gameObjects {
        id 
        object {
          id
          title
          character
        }
      }
    }
    */
    setCurrentGame(dummyGameData[0]);
    // setCurrentGame(
    //   _.find(JSON.parse(localStorage.getItem('games')) || [], {
    //     id: parseInt(gameId),
    //   }),
    // );
    /* TODO: Query for the level that has id of levelId 
    query shape:
    level {
      id
      title
      levelGameObjects {
        id
        gameObject {
          id
          object {
            id
            title
            character
          }
        }
        xPosition
        yPosition
        data
      }
    }
    */
    setCurrentLevel(dummyGameData[0].levels[0]);
    // setCurrentLevel(
    //   _.find(JSON.parse(localStorage.getItem('levels')) || [], {
    //     id: parseInt(levelId),
    //   }),
    // );
  }, [gameId, levelId]);

  const [gameEngine] = useState(new GameEngine());
  const [cursor] = useState(new Cursor(gameEngine));

  useEffect(() => {
    if (currentLevel) {
      gameEngine.addComponent(cursor);
      gameEngine.start();
    }
  }, [currentLevel]);

  return <Editor {...{ ...props, currentGame, currentLevel }} />;
}

const initialState = {
  currentGame: undefined,
  currentLevel: undefined,
};

export const GameContext = createContext(initialState);

function Editor(props) {
  const classes = useStyles();
  const { currentGame, currentLevel } = props;

  return (
    <GameContext.Provider
      value={{
        currentGame,
        currentLevel,
      }}
    >
      <Grid item>
        <Toolbar />
      </Grid>
      <Grid item container className={classes.Editor}>
        <Grid item xs={9} style={{ height: '100%', width: '100%' }}>
          <Creator />
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
  Editor: {
    flex: 1,
    // '& .MuiGrid-item': {
    //   border: '1px solid red',
    // },
  },
});

export default EditorContainer;

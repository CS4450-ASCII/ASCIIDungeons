import { Grid, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { createContext, useEffect } from 'react';
import { Form as FForm } from 'react-final-form';
import { Redirect, useParams } from 'react-router-dom';
import { gameGraphql } from '../../../../graphql/game';
import {
  useMutationWithError,
  useQueryWithError,
} from '../../../../helpers/customHooks';
import LoadingContainer from '../../../Common/LoadingContainer';
import GameContainer from '../../../Game/GameContainer';
import BottomToolbar from './BottomToolbar/BottomToolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';

function EditorContainer(props) {
  const { gameId, levelIndex } = useParams();
  const { loading, data, refetch } = useQueryWithError(
    gameGraphql.EDITOR_CONTEXT,
    {
      variables: {
        gameId,
        levelIndex,
      },
    },
  );

  useEffect(() => {
    // rerun the query if the gameId or levelIndex change
    if (!loading) {
      refetch({ variables: { gameId, levelIndex } });
    }
  }, [gameId, levelIndex]);

  const [updateGame] = useMutationWithError(gameGraphql.UPDATE_GAME);

  if (loading) return <LoadingContainer />;

  const currentGame = _.get(data, 'editorContext.currentGame');
  const currentLevel = _.get(data, 'editorContext.currentLevel');

  // redirect to create page index if currentGame not found
  if (!currentGame) return <Redirect to={'/create'} />;
  // redirect to the currentGame index page if currentLevel not found
  if (!currentLevel) return <Redirect to={`/create/${gameId}`} />;

  const onSave = (values) => {
    console.log(values);
    updateGame({ variables: { params: values } });
  };

  return (
    <Editor
      {...{
        ...props,
        currentGame,
        currentLevel,
        currentLevelIndex: parseInt(levelIndex),
        onSave,
      }}
    />
  );
}

const initialState = {
  currentGame: undefined,
  currentLevel: undefined,
};

export const EditorContext = createContext(initialState);

function Editor(props) {
  const classes = useStyles();
  const { currentGame, currentLevel, currentLevelIndex, onSave } = props;
  const { id, isPublished } = currentGame;
  return (
    <FForm
      onSubmit={onSave}
      initialValues={{
        id,
        isPublished,
      }}
    >
      {({ handleSubmit }) => (
        <EditorContext.Provider
          value={{
            currentGame,
            currentLevel,
            currentLevelIndex,
            handleSubmit,
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
        </EditorContext.Provider>
      )}
    </FForm>
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

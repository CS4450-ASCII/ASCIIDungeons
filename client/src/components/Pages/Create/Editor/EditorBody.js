import { Grid, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyGameData, dummyLevelData } from '../../../../stories/dummyData';
import Creator from '../../../Game/Creator';
import { Cursor } from '../../../Game/Engine/Components/Cursor';
import { GameEngine } from '../../../Game/Engine/GameEngine';
import BottomToolbar from './BottomToolbar/BottomToolbar';
import SideDrawer from './SideDrawer/SideDrawer';

function EditorBodyContainer(props) {
  const { gameId, levelId } = useParams();

  const game = _.find(dummyGameData, { id: parseInt(gameId) });
  const level = _.find(dummyLevelData, { id: parseInt(levelId) });

  const [gameEngine] = useState(new GameEngine());
  const [cursor] = useState(new Cursor(gameEngine));

  useEffect(() => {
    gameEngine.addComponent(cursor);
    gameEngine.start();
  }, []);

  return <EditorBody currentGame={game} currentLevel={level} />;
}

export function EditorBody(props) {
  const classes = useStyles();
  const { currentGame, currentLevel } = props;

  return (
    <>
      <Grid item container className={classes.editorBody}>
        <Grid item xs={9} style={{ height: '100%', width: '100%' }}>
          <Creator currentLevel={currentLevel} />
        </Grid>
        <Grid item xs={3}>
          <SideDrawer currentGame={currentGame} currentLevel={currentLevel} />
        </Grid>
      </Grid>
      <Grid item>
        <BottomToolbar
          gameTitle={_.get(currentGame, 'title')}
          levelTitle={_.get(currentLevel, 'title')}
        />
      </Grid>
    </>
  );
}

const useStyles = makeStyles({
  editorBody: {
    flex: 1,
    // '& .MuiGrid-item': {
    //   border: '1px solid red',
    // },
  },
});

export default EditorBodyContainer;

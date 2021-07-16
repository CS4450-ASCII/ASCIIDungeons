import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import BottomToolbar from './BottomToolbar/BottomToolbar';

function EditorBody(props) {
  const classes = useStyles();
  const { gameId, levelId } = useParams();

  return (
    <>
      <Grid item container className={classes.editorBody}>
        <Grid item xs={9}>
          {'<Grid>'}
        </Grid>
        <Grid item xs={3}>
          {'<Side Drawer>'}
        </Grid>
      </Grid>
      <Grid item>
        <BottomToolbar gameTitle={'Game 1'} levelTitle={'Level 1'} />
      </Grid>
    </>
  );
}

const useStyles = makeStyles({
  editorBodyRoot: {
    width: '100%',
    display: 'flex',
    border: '1px solid red'
  }
});

export default EditorBody;

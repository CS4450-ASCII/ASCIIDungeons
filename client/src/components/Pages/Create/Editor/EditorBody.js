import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import BottomToolbar from './BottomToolbar/BottomToolbar';

function EditorBody(props) {
  const classes = useStyles();
  const { gameId, levelId } = useParams();

  return <div className={classes.editorBodyRoot}></div>;
}

const useStyles = makeStyles({
  editorBodyRoot: {
    width: '100%',
    display: 'flex',
    border: '1px solid red'
  }
});

export default EditorBody;

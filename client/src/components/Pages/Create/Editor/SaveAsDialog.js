import { makeStyles } from '@material-ui/core';
import React from 'react';
import NewGameDialog from './NewGameDialog';

function SaveAsDialog(props) {
  const { openButton, game } = props;

  const onSubmit = values => {
    alert(JSON.stringify(values));
  };

  const initialValues = { ...game };

  return (
    <NewGameDialog
      {...{
        title: 'Save As',
        openButton,
        onSubmit,
        initialValues: game
      }}
    />
  );
}

export default SaveAsDialog;

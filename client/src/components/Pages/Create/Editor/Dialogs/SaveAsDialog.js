import { makeStyles } from '@material-ui/core';
import React from 'react';
import NewGameDialog from './NewGameDialog';

function SaveAsDialog(props) {
  const { openButton, game, ...dialogProps } = props;

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
        initialValues
      }}
      {...dialogProps}
    />
  );
}

export default SaveAsDialog;

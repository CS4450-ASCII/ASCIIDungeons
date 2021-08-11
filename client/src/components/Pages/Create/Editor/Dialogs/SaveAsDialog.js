import _ from 'lodash';
import React, { useContext } from 'react';
import { EditorContext } from '../Editor';
import NewGameDialog from './NewGameDialog';

function SaveAsDialog(props) {
  const { openButton, ...dialogProps } = props;

  const { currentGame } = useContext(EditorContext);

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const initialValues = {
    ...currentGame,
    title: `Copy of ${_.get(currentGame, 'title')}`,
  };

  return (
    <NewGameDialog
      {...{
        title: 'Save As',
        openButton,
        onSubmit,
        initialValues,
      }}
      {...dialogProps}
    />
  );
}

export default SaveAsDialog;

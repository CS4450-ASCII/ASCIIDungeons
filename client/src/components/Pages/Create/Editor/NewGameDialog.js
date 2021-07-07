import { makeStyles } from '@material-ui/core';
import React from 'react';
import FormDialog from '../../../Common/FormDialog';
import InputField from '../../../Common/InputField';

function NewGameDialog(props) {
  const { openButton, title = 'New Game', onSubmit, ...rest } = props;

  const handleSubmit = values => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      alert(JSON.stringify(values));
    }
  };

  const formFields = [
    {
      name: 'title',
      Component: InputField,
      noWrap: true
    },
    {
      name: 'description',
      Component: InputField,
      multiline: true,
      rows: 8
    }
  ];

  return (
    <FormDialog
      {...{
        title,
        openButton,
        formFields,
        onSubmit: handleSubmit,
        maxWidth: 'xs'
      }}
      {...rest}
    />
  );
}

export default NewGameDialog;

import { makeStyles } from '@material-ui/core';
import React from 'react';
import FormDialog from '../../../Common/FormDialog';
import InputField from '../../../Common/InputField';

function NewGameDialog(props) {
  const classes = useStyles();
  const { children, openButton } = props;

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

  // const onSubmit = (values) => {};

  return (
    <FormDialog
      {...{
        title: 'New Game',
        openButton,
        // onSubmit,
        formFields,
        maxWidth: 'xs'
      }}
    />
  );
}

const useStyles = makeStyles({
  root: {}
});

export default NewGameDialog;

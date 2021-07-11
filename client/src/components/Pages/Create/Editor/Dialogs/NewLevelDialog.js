import React from 'react';
import { makeStyles } from '@material-ui/core';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';
import * as Yup from 'yup';

function NewLevelDialog(props) {
  const classes = useStyles();
  const { openButton, title = 'New Level', ...dialogProps } = props;

  const formFields = [
    {
      name: 'title',
      Component: InputField,
      nowWrap: true
    },
    {
      name: 'width',
      Component: InputField,
      type: 'number',
      endLabel: 'Squares',
      inputWidth: 140,
      inputProps: {
        dir: 'rtl'
      },
      nowWrap: true
    },
    {
      name: 'height',
      Component: InputField,
      type: 'number',
      endLabel: 'Squares',
      inputWidth: 140,
      inputProps: {
        dir: 'rtl'
      },
      nowWrap: true
    }
  ];

  const validationSchema = Yup.object().shape({
    width: Yup.number().required('Width is required.'),
    height: Yup.number().required('Height is required.')
  });

  const initialValues = {
    width: 64,
    height: 64
  };

  return (
    <FormDialog
      {...{
        title,
        openButton,
        // onSubmit,
        formFields,
        validationSchema,
        initialValues,
        ...dialogProps
      }}
    />
  );
}

const useStyles = makeStyles({
  root: {}
});

export default NewLevelDialog;

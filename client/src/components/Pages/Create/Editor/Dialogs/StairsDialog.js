import { makeStyles } from '@material-ui/core';
import React from 'react';
import * as Yup from 'yup';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';

function StairsDialog(props) {
  const classes = useStyles();
  const { openButton, title = 'Edit Stairs', ...dialogProps } = props;

  const onSubmit = async (values) => {};

  const formFields = [
    {
      name: 'title',
      Component: InputField,
      nowWrap: true,
    },
    {
      name: 'goToLevelId',
      Component: InputField,
      type: 'number',
      inputWidth: 140,
      nowWrap: true,
    },
    {
      name: 'goToStairsId',
      Component: InputField,
      type: 'number',
      inputWidth: 140,
      nowWrap: true,
    },
  ];

  const validationSchema = Yup.object().shape({
    // width: Yup.number().required('Width is required.'),
    // height: Yup.number().required('Height is required.'),
  });

  const initialValues = {
    // width: 40,
    // height: 40,
  };

  return (
    <FormDialog
      {...{
        title,
        openButton,
        onSubmit,
        formFields,
        validationSchema,
        initialValues,
        ...dialogProps,
      }}
    />
  );
}

const useStyles = makeStyles({
  root: {},
});

export default StairsDialog;

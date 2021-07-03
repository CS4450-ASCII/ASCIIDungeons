import {
  Button,
  DialogActions,
  DialogContent,
  makeStyles
} from '@material-ui/core';
import React from 'react';
import Dialog from './Dialog';
import FormComponent from './FormComponent';
import FormFields from './FormFields';

function FormDialog(props) {
  const classes = useStyles();
  const {
    onSubmit = values => alert(JSON.stringify(values)),
    formFields,
    submitButtonText = 'Submit',
    validationSchema,
    initialValues,
    ...dialogProps
  } = props;

  return (
    <Dialog {...dialogProps}>
      {({ handleClose }) => (
        <FormComponent
          onSubmit={values => {
            onSubmit(values);
            handleClose();
          }}
          {...{ validationSchema, initialValues }}
        >
          <DialogContent>
            <FormFields {...{ formFields }} />
          </DialogContent>
          <DialogActions>
            <Button type='submit' color='secondary'>
              {submitButtonText}
            </Button>
          </DialogActions>
        </FormComponent>
      )}
    </Dialog>
  );
}

const useStyles = makeStyles({
  root: {}
});

export default FormDialog;

import { Button, Grid, makeStyles } from '@material-ui/core';
import { makeValidate } from 'mui-rff';
import React, { createContext } from 'react';
import { Form as FForm } from 'react-final-form';
import FormFields from './FormFields';

const initialState = {
  values: undefined,
};
export const FormContext = createContext(initialState);

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    margin: 'auto',
  },
  footer: {
    marginTop: 10,
  },
});

function FormComponent(props) {
  const classes = useStyles();
  const {
    onSubmit,
    gridProps,
    formFields,
    footer,
    submitButtonText = 'Submit',
    validationSchema,
    initialValues,
    children,
  } = props;

  const validate = validationSchema && makeValidate(validationSchema);

  return (
    <FForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      {({ handleSubmit, values: formValues }) => (
        <FormContext.Provider value={{ formValues }}>
          <form onSubmit={handleSubmit}>
            {!children && (
              <FormFields
                {...gridProps}
                {...{ formFields }}
                className={classes.root}
              >
                <Grid item>
                  <Button type='submit' color='primary'>
                    {submitButtonText}
                  </Button>
                </Grid>
                {footer && (
                  <Grid item xs={12} className={classes.footer}>
                    {footer}
                  </Grid>
                )}
              </FormFields>
            )}
            {children}
          </form>
        </FormContext.Provider>
      )}
    </FForm>
  );
}

export default FormComponent;

import { Button, Grid, makeStyles } from '@material-ui/core';
import { makeValidate } from 'mui-rff';
import React from 'react';
import { Form as FForm } from 'react-final-form';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    margin: 'auto'
  },
  footer: {
    marginTop: 10
  }
});

function FormComponent(props) {
  const classes = useStyles();
  const {
    onSubmit,
    gridProps,
    formFields,
    submitButtonText = 'Submit',
    footer,
    validationSchema,
    initialValues
  } = props;

  const validate = makeValidate(validationSchema);

  return (
    <FForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            item
            container
            spacing={4}
            className={classes.root}
            direction='column'
            alignItems='flex-end'
            {...gridProps}
          >
            {formFields.map(field => {
              const { component: FieldComponent, ...fieldProps } = field;
              return (
                <Grid item xs={12}>
                  {FieldComponent ? <FieldComponent {...fieldProps} /> : field}
                </Grid>
              );
            })}
            <Grid item>
              <Button type='submit' color='primary'>
                {submitButtonText}
              </Button>
            </Grid>
            <Grid item={12} className={classes.footer}>
              {footer}
            </Grid>
          </Grid>
        </form>
      )}
    </FForm>
  );
}

export default FormComponent;

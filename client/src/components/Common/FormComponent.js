import { Button, Grid, makeStyles } from '@material-ui/core';
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
    footer
  } = props;

  return (
    <FForm onSubmit={onSubmit}>
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

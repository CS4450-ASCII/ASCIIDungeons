import { Grid } from '@material-ui/core';
import { showErrorOnBlur } from 'mui-rff';
import React from 'react';

function FormFields(props) {
  const { formFields, children, ...gridProps } = props;

  return (
    <Grid
      item
      container
      spacing={4}
      direction='column'
      alignItems='flex-end'
      {...gridProps}
    >
      {formFields.map((field) => {
        const { Component, ...fieldProps } = field;
        return (
          <Grid key={`field-${field.name}`} item xs={12}>
            {Component ? (
              <Component showError={showErrorOnBlur} {...fieldProps} />
            ) : (
              field
            )}
          </Grid>
        );
      })}
      {children}
    </Grid>
  );
}

export default FormFields;

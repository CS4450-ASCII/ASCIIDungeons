import React from 'react';
import { InputBase, makeStyles } from '@material-ui/core';
import { Field } from 'react-final-form';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#C4C4C4',
    height: '3em',
    width: '20em',
    margin: '1em'
  },
  label: {
    fontSize: '1.5em',
    height: '3em',
    verticalAlign: 'center'
  }
});

function InputField(props) {
  const classes = useStyles();
  const { name, label, ...rest } = props;

  return (
    <Field name={name}>
      {inputProps => (
        <>
          <label className={classes.label}>
            {label}
            <InputBase {...inputProps} {...rest} className={classes.root} />
          </label>
        </>
      )}
    </Field>
  );
}

export default InputField;

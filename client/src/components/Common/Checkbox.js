import { makeStyles, Typography, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Checkbox(props) {
  const classes = useStyles();
  const {
    initiallyChecked,
    variant,
    label,
    labelPlacement,
    onChange,
    labelStyle,
  } = props;
  const [checked, setChecked] = useState(initiallyChecked);

  const handleChange = () => {
    setChecked((prevChecked) => {
      onChange && onChange(!prevChecked);
      return !prevChecked;
    });
  };

  const styledLabel = <span style={labelStyle}>{label}</span>;
  return (
    <div
      className={clsx(classes.checkboxContainer, {
        checked,
        [variant]: variant,
      })}
      onClick={handleChange}
    >
      {labelPlacement === 'start' && styledLabel}
      <div className={classes.checkboxRoot}>
        <Typography className={classes.checkMark}>
          {checked ? 'X' : ''}
        </Typography>
      </div>
      {labelPlacement === 'end' && styledLabel}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    '& > *': {
      fontSize: '1.0em',
    },
    '&.light': {
      '& > *': {
        color: 'white',
      },
      '& $checkboxRoot': {
        color: 'black',
        backgroundColor: theme.palette.gray.light,
      },
    },
    '&.dark': {
      '& > *': {
        color: 'black',
      },
      '& $checkboxRoot': {
        color: 'white',
        backgroundColor: theme.palette.gray.dark,
      },
    },
  },
  checkboxRoot: {
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    cursor: 'pointer',
  },
  checkMark: {
    padding: '2px 0 0 2px',
  },
}));

Checkbox.propTypes = {
  initiallyChecked: PropTypes.bool,

  variant: PropTypes.oneOf(['light', 'dark']),

  label: PropTypes.string,

  labelPlacement: PropTypes.oneOf(['start', 'end']),
};

Checkbox.defaultProps = {
  initiallyChecked: false,

  variant: 'light',

  label: undefined,

  labelPlacement: 'start',
};

export default withTheme(Checkbox);

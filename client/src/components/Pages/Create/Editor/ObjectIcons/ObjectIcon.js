import { makeStyles, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function ObjectIcon(props) {
  const classes = useStyles();
  const { object, isSelected } = props;
  const { character, title } = object;

  return (
    <div className={clsx(classes.objectIconRoot, { isSelected })} title={title}>
      {character}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  objectIconRoot: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.isSelected, &:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

ObjectIcon.propTypes = {
  object: PropTypes.object,

  isSelected: PropTypes.bool,
};

ObjectIcon.defaultProps = {
  object: {},

  isSelected: false,
};

export default withTheme(ObjectIcon);

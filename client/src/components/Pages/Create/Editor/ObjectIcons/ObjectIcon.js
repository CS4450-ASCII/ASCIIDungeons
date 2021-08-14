import { makeStyles, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function ObjectIcon(props) {
  const classes = useStyles();
  const { gameObject, isSelected } = props;
  const {
    object: { character, title },
  } = gameObject;

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
  gameObject: PropTypes.object,

  isSelected: PropTypes.bool,
};

ObjectIcon.defaultProps = {
  gameObject: { object: {} },

  isSelected: false,
};

export default withTheme(ObjectIcon);

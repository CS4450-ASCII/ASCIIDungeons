import { makeStyles, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function EntityIcon(props) {
  const classes = useStyles();
  const { entity, isSelected } = props;
  const { character } = entity;

  return (
    <div className={clsx(classes.entityIconRoot, { isSelected })}>
      {character}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  entityIconRoot: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.isSelected': {
      backgroundColor: theme.palette.gray.light,
    },
  },
}));

EntityIcon.propTypes = {
  entity: PropTypes.object,

  isSelected: PropTypes.bool,
};

EntityIcon.defaultProps = {
  entity: {},

  isSelected: false,
};

export default withTheme(EntityIcon);

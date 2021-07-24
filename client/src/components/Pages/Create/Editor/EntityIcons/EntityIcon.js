import { makeStyles, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function EntityIcon(props) {
  const classes = useStyles();
  const { entity, isSelected } = props;
  const { character, title } = entity;

  return (
    <div className={clsx(classes.entityIconRoot, { isSelected })} title={title}>
      {character}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  entityIconRoot: {
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

EntityIcon.propTypes = {
  entity: PropTypes.object,

  isSelected: PropTypes.bool,
};

EntityIcon.defaultProps = {
  entity: {},

  isSelected: false,
};

export default withTheme(EntityIcon);

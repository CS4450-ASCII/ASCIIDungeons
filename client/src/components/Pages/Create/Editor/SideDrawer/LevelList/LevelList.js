import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ScrollList from '../../../../../Common/ScrollList/ScrollList';

function LevelList(props) {
  const classes = useStyles();
  const { rows, onSelectionChange } = props;

  return (
    <ScrollList
      rows={rows}
      onSelectionChange={onSelectionChange}
      height={240}
      itemSize={40}
      alignItems={'left'}
    />
  );
}

const useStyles = makeStyles({
  levelListRoot: {},
});

LevelList.propTypes = {};

LevelList.defaultProps = {};

export default LevelList;

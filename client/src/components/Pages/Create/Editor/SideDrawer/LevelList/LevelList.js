import { makeStyles } from '@material-ui/core';
import React from 'react';
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
      emptyMessage={'No levels found. Click the "+" button to add one.'}
    />
  );
}

const useStyles = makeStyles({
  levelListRoot: {},
});

LevelList.propTypes = {};

LevelList.defaultProps = {};

export default LevelList;

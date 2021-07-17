import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ScrollList from '../../../../../Common/ScrollList/ScrollList';

function LevelList(props) {
  const classes = useStyles();
  const { rows } = props;

  const history = useHistory();
  const { gameId, levelId } = useParams();

  const onSelectionChange = (selection) => {
    history.push(`/create/${gameId}/${selection.id}`);
  };

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

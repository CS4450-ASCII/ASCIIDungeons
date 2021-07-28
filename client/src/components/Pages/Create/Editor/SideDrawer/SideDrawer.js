import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NewLevelDialog from '../Dialogs/NewLevelDialog';
import { GameContext } from '../Editor';
import ObjectIconGroup from '../ObjectIcons/ObjectIconGroup';
import LevelList from './LevelList/LevelList';
import SideDrawerGroup from './SideDrawerGroup';

function SideDrawer(props) {
  const classes = useStyles();
  const { currentGame, currentLevel } = useContext(GameContext);

  const history = useHistory();

  const onLevelListChange = (selectedLevel) => {
    history.push(`/create/${currentGame.id}/${selectedLevel.id}`);
  };

  const action = <NewLevelDialog openButton={'+'} />;
  const { gameObjects = [], levels = [] } = currentGame || {};

  return (
    <div className={classes.sideDrawerRoot}>
      <SideDrawerGroup title={'Objects'}>
        <ObjectIconGroup gameObjects={gameObjects} />
      </SideDrawerGroup>
      <SideDrawerGroup title={'Levels'} action={action}>
        <LevelList
          rows={levels}
          onSelectionChange={onLevelListChange}
          // initialSelectionIndex={currentLevel}
        />
      </SideDrawerGroup>
    </div>
  );
}

const useStyles = makeStyles({
  sideDrawerRoot: {
    width: '100%',
    height: '100%',
    maxWidth: 250,
    display: 'flex',
    flexDirection: 'column',
  },
});

SideDrawer.propTypes = {
  currentGame: PropTypes.object,
};

SideDrawer.defaultProps = {
  currentGame: { gameObjects: [], levels: [] },
};

export default SideDrawer;

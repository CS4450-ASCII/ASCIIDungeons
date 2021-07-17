import { makeStyles } from '@material-ui/core';
import React from 'react';
import { dummyLevelData } from '../../../../../stories/dummyData';
import NewLevelDialog from '../Dialogs/NewLevelDialog';
import LevelList from './LevelList/LevelList';
import SideDrawerGroup from './SideDrawerGroup';

function SideDrawer(props) {
  const classes = useStyles();
  const { currentGame, currentLevel } = props;

  const action = <NewLevelDialog openButton={'+'} />;

  const rows = dummyLevelData;
  return (
    <div className={classes.sideDrawerRoot}>
      <SideDrawerGroup title={'Entities'}></SideDrawerGroup>
      <SideDrawerGroup title={'Levels'} action={action}>
        <LevelList rows={rows} />
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

SideDrawer.propTypes = {};

SideDrawer.defaultProps = {};

export default SideDrawer;

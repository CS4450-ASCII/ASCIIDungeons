import React from 'react';
import { makeStyles, Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import SideDrawerGroup from './SideDrawerGroup';
import NewLevelDialog from '../Dialogs/NewLevelDialog';
import ScrollList from '../../../../Common/ScrollList/ScrollList';
import LevelList from './LevelList/LevelList';

function SideDrawer(props) {
  const classes = useStyles();
  const {} = props;

  const action = <NewLevelDialog openButton={'+'} />;

  const rows = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'].map(
    (title) => ({
      title,
    }),
  );

  return (
    <Drawer
      classes={{ paper: classes.sideDrawerRoot }}
      variant={'permanent'}
      anchor={'right'}
    >
      <SideDrawerGroup title={'Entities'}></SideDrawerGroup>
      <SideDrawerGroup title={'Levels'} action={action}>
        <LevelList rows={rows} />
      </SideDrawerGroup>
    </Drawer>
  );
}

const useStyles = makeStyles({
  sideDrawerRoot: {
    border: 'none',
    width: '100%',
    maxWidth: 250,
  },
});

SideDrawer.propTypes = {};

SideDrawer.defaultProps = {};

export default SideDrawer;

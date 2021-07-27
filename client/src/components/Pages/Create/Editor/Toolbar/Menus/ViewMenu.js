import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import ToolbarOptionMenu from '../ToolbarOptionMenu';

function ViewMenu(props) {
  const classes = useStyles();
  const menuGroups = [[{ label: 'Hide Grid' }]];

  return (
    <ToolbarOptionMenu {...props} label={'View'} menuGroups={menuGroups} />
  );
}

const useStyles = makeStyles((theme) => ({
  viewMenuRoot: {},
}));

ViewMenu.propTypes = {};

ViewMenu.defaultProps = {};

export default withTheme(ViewMenu);

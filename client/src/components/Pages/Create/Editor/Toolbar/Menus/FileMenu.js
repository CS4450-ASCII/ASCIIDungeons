import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import ToolbarOptionMenu from '../ToolbarOptionMenu';

function FileMenu(props) {
  const classes = useStyles();

  const menuGroups = [
    [
      {
        label: 'New Game',
      },
      {
        label: 'Open',
      },
    ],
    [{ label: 'Save', hotkey: 'Ctrl-S' }, { label: 'Save As' }],
  ];
  return (
    <ToolbarOptionMenu {...props} label={'File'} menuGroups={menuGroups} />
  );
}

const useStyles = makeStyles((theme) => ({
  fileMenuRoot: {},
}));

FileMenu.propTypes = {};

FileMenu.defaultProps = {};

export default withTheme(FileMenu);

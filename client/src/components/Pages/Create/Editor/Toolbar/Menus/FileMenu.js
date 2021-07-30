import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import NewGameDialog from '../../Dialogs/NewGameDialog';
import OpenGameDialog from '../../Dialogs/OpenGameDialog';
import SaveAsDialog from '../../Dialogs/SaveAsDialog';
import ToolbarOptionMenu from '../ToolbarOptionMenu';

function FileMenu(props) {
  const classes = useStyles();

  const menuGroups = [
    [
      {
        label: <NewGameDialog openButton={<span>New Game</span>} />,
      },
      {
        label: <OpenGameDialog openButton={<span>Open Game</span>} />,
      },
    ],
    [
      { label: 'Save', hotkey: 'Ctrl-S' },
      { label: <SaveAsDialog openButton={<span>Save As</span>} /> },
    ],
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

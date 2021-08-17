import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import ToolbarOptionMenu from '../ToolbarOptionMenu';

function EditMenu(props) {
  const classes = useStyles();
  const {} = props;

  const menuGroups = [
    // TODO: Add Game Info option that allows updating the game title and description.
    // [{ label: 'Game Info' }],
    [
      { label: 'Undo', hotkey: 'Ctrl-Z' },
      { label: 'Redo', hotkey: 'Ctrl-V' },
    ],
  ];

  return (
    <ToolbarOptionMenu {...props} label={'Edit'} menuGroups={menuGroups} />
  );
}

const useStyles = makeStyles((theme) => ({
  editMenuRoot: {},
}));

EditMenu.propTypes = {};

EditMenu.defaultProps = {};

export default withTheme(EditMenu);

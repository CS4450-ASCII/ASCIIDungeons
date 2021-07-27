import { makeStyles, MenuItem, withTheme } from '@material-ui/core';
import React from 'react';

function MenuOption(props) {
  const classes = useStyles();
  const { label, hotkey } = props;

  return (
    <MenuItem className={classes.menuOptionRoot}>
      <div style={{ flexGrow: 1 }}>{label}</div>
      <div style={{ fontSize: '0.7em' }}>{hotkey}</div>
    </MenuItem>
  );
}

const useStyles = makeStyles((theme) => ({
  menuOptionRoot: {
    display: 'flex',
  },
}));

MenuOption.propTypes = {};

MenuOption.defaultProps = {};

export default withTheme(MenuOption);

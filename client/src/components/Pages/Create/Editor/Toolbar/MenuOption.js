import { makeStyles, MenuItem, withTheme } from '@material-ui/core';
import React from 'react';

function MenuOption(props) {
  const classes = useStyles();
  const { label, hotkey, ...rest } = props;

  return (
    <MenuItem className={classes.menuOptionRoot} {...rest}>
      <div className={classes.label}>{label}</div>
      <div className={classes.hotkey}>{hotkey}</div>
    </MenuItem>
  );
}

const useStyles = makeStyles((theme) => ({
  menuOptionRoot: {
    display: 'flex',
  },
  label: {
    flexGrow: 1,
  },
  hotkey: {
    fontSize: '0.7em',
  },
}));

MenuOption.propTypes = {};

MenuOption.defaultProps = {};

export default withTheme(MenuOption);

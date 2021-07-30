import React from 'react';
import { makeStyles } from '@material-ui/core';

function HotkeyLabel(props) {
  const classes = useStyles();
  const { hotkey, label } = props;

  return (
    <div className={classes.hotkeyLabelRoot}>
      <span className={classes.hotkey}>{hotkey}</span>
      <span className={classes.separator}>-</span>
      <span>{label}</span>
    </div>
  );
}

const useStyles = makeStyles({
  hotkeyLabelRoot: {
    paddingLeft: '3em'
  },
  separator: {
    padding: '0 4px'
  },
  hotkey: {
    color: 'black',
    backgroundColor: 'lightgrey',
    height: '25px',
    width: '25px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HotkeyLabel;

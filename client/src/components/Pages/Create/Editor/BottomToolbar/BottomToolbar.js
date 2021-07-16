import React from 'react';
import { makeStyles } from '@material-ui/core';
import HotkeyLabel from './HotkeyLabel';

const useStyles = makeStyles({
  bottomToolbarRoot: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: '1em'
  },
  title: {
    flexGrow: 1
  }
});

function BottomToolbar(props) {
  const classes = useStyles();
  const { gameTitle, levelTitle } = props;

  const title = [gameTitle, levelTitle].join(' > ');

  return (
    <div className={classes.bottomToolbarRoot}>
      <div className={classes.title}>{title}</div>
      <HotkeyLabel hotkey={'D'} label={'Draw'} />
      <HotkeyLabel hotkey={'E'} label={'Erase'} />
    </div>
  );
}

export default BottomToolbar;

import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext } from 'react';
import { GameContext } from '../Editor';
import HotkeyLabel from './HotkeyLabel';

const useStyles = makeStyles({
  bottomToolbarRoot: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: '1em',
    borderTop: '1px solid white',
  },
  title: {
    flexGrow: 1,
  },
});

function BottomToolbar(props) {
  const classes = useStyles();
  const { currentGame, currentLevel } = useContext(GameContext);

  const gameTitle = _.get(currentGame, 'title');
  const levelTitle = _.get(currentLevel, 'title');

  const title = _.compact([gameTitle, levelTitle]).join(' > ');

  return (
    <div className={classes.bottomToolbarRoot}>
      <div className={classes.title}>{title}</div>
      <HotkeyLabel hotkey={'D'} label={'Draw'} />
      <HotkeyLabel hotkey={'E'} label={'Erase'} />
    </div>
  );
}

export default BottomToolbar;

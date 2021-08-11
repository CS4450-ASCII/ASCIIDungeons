import { makeStyles } from '@material-ui/core';
import React from 'react';
import GameEngine from '../../Game/Engine/GameEngine';

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 600,
  },
});

function Play(props) {
  const classes = useStyles();
  const {} = props;

  // const [gameEngine] = useState(new GameEngine());

  // useEffect(() => {
  //   gameEngine.renderer.showGridLines(false);
  //   gameEngine.start();
  // }, []);

  return (
    <div className={classes.root}>
      <GameEngine />
    </div>
  );
}

export default Play;

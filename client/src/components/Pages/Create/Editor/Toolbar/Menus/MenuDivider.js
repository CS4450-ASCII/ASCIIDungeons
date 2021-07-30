import { makeStyles, Typography, withTheme } from '@material-ui/core';
import React from 'react';

function MenuDivider(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.menuDividerRoot}>
      ----------------
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  menuDividerRoot: {
    margin: '0.4em auto',
    width: '100%',
    textAlign: 'center',
  },
}));

export default withTheme(MenuDivider);

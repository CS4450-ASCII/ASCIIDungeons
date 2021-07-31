import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';

function LoadingContainer(props) {
  const classes = useStyles();
  const {} = props;

  return <div className={classes.loadingContainerRoot}>Loading...</div>;
}

const useStyles = makeStyles((theme) => ({
  loadingContainerRoot: {},
}));

LoadingContainer.propTypes = {};

LoadingContainer.defaultProps = {};

export default withTheme(LoadingContainer);

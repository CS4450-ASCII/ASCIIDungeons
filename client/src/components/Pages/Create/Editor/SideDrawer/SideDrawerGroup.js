import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function SideDrawerGroup(props) {
  const classes = useStyles();
  const { title, children, action, ...rest } = props;

  return (
    <div className={classes.sideDrawerGroupRoot} {...rest}>
      <div className={classes.groupHeader}>
        <Typography variant='h4'>{title}</Typography>
        {action && <div className={classes.action}>{action}</div>}
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const useStyles = makeStyles({
  sideDrawerGroupRoot: {
    flex: '1 1 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  groupHeader: {
    backgroundColor: '#4C5676',
    textAlign: 'center',
    padding: '0.8em',
    paddingBottom: '0.5em',
    position: 'relative',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#575555',
    padding: '0.8em',
    display: 'flex',
    justifyContent: 'center',
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '0.8em',
  },
});

SideDrawerGroup.propTypes = {
  title: PropTypes.string,
  action: PropTypes.any,
};

export default SideDrawerGroup;

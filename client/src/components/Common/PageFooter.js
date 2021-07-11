import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useCurrentUser } from '../../helpers/customHooks';
import PropTypes from 'prop-types';

function PageFooter() {
  const { currentUser, logout } = useCurrentUser();
  const location = useLocation();
  const history = useHistory();
  const showWelcome =
    ['/', '/main'].includes(location.pathname) || !currentUser;

  return (
    <PageFooterDisplay
      {...{
        showWelcome,
        currentUser,
        clickEvents: {
          mainMenu: () => history.push('/main'),
          logout
        }
      }}
    />
  );
}

PageFooterDisplay.propTypes = {
  showWelcome: PropTypes.bool,

  currentUser: PropTypes.object,

  clickEvents: PropTypes.object
};

export function PageFooterDisplay(props) {
  const { showWelcome, currentUser, clickEvents } = props;
  const { displayName, email } = currentUser || {};

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box flexGrow={1}>
        {showWelcome ? (
          <Typography variant='h2'>
            Welcome, {displayName || email || 'Adventurer'}!
          </Typography>
        ) : (
          <Button onClick={_.get(clickEvents, 'mainMenu')}>Main Menu</Button>
        )}
      </Box>
      <Box>
        {currentUser && (
          <Button color='primary' onClick={_.get(clickEvents, 'logout')}>
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    maxWidth: '1536px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start-end',
    padding: '0.5em 1em 0.5em 1em'
  }
});

export default PageFooter;

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useCurrentUser } from '../../helpers/customHooks';

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

function PageFooter(props) {
  const classes = useStyles();
  const {} = props;

  const { currentUser, logout } = useCurrentUser();

  const { displayName, email } = currentUser || {};

  const location = useLocation();
  const history = useHistory();

  const showWelcome =
    ['/', '/main'].includes(location.pathname) || !currentUser;

  return (
    <Box className={classes.root}>
      <Box flexGrow={1}>
        {showWelcome ? (
          <Typography variant='h2'>
            Welcome, {displayName || email || 'Adventurer'}!
          </Typography>
        ) : (
          <Button onClick={() => history.push('/main')}>Main Menu</Button>
        )}
      </Box>
      <Box>
        {currentUser && (
          <Button color='primary' onClick={logout}>
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default PageFooter;

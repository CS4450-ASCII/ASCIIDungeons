import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useCurrentUser } from '../../helpers/hooks';

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

  return (
    <Box className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant='h2'>
          Welcome, {displayName || email || 'Adventurer'}!
        </Typography>
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

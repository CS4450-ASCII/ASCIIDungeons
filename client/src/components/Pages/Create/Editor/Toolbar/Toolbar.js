import { makeStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';
import EditMenu from './Menus/EditMenu';
import FileMenu from './Menus/FileMenu';
import ViewMenu from './Menus/ViewMenu';

function Toolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.toolbarRoot}>
      <FileMenu endDivider />
      <EditMenu endDivider />
      <ViewMenu />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    backgroundColor: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    height: 'min-content',
    width: '100%',
  },
}));

export default withTheme(Toolbar);

import { makeStyles } from '@material-ui/core';
import React from 'react';
import VerticalTabs from './FilterTabs';
import { userGraphql } from '../../../graphql/user';
import { useParams } from 'react-router-dom';
import { useQueryWithError } from '../../../helpers/customHooks';

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
});

function GameList(props) {
  const classes = useStyles();
  const {} = props;

  return (
    <div className={classes.root}>
      <VerticalTabs/>
    </div>
  );
}

export default GameList;

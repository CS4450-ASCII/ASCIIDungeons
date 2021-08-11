import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { userGraphql } from '../../../graphql/user';
import { useQueryWithError } from '../../../helpers/customHooks';
import Divider from './Pieces/Divider';
import EditProfileDialog from './Pieces/EditProfileDialog';
import Games from './Pieces/Games';
import Score from './Pieces/Score';
import Stats from './Pieces/Stats';
import Username from './Pieces/Username';
import UserSearch from './Pieces/UserSearch';

//TODO
// Query for the User from URL params -> useParams hook => returns { userID }
// useQueryWithError() (useQuery from Apollo wrapper)



const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

function Profile(props) {
  const classes = useStyles();
  const {} = props;

  const { id } = useParams();
  const { loading, data, refetch } = useQueryWithError(
    userGraphql.USER,
    {
      variables: {
        id,
      },
    },
  );

  if (loading) return <div>Loading...</div>;

  //TODO: Go into each subcomponent and replace dummy data with real data.
  return (
    <div className={classes.root}>
      <Username />
      <Divider />
      <EditProfileDialog />
      <Divider />
      <Score />
      <Divider />
      <Stats />
      <Divider />
      <Games games={data.user.games}/>
      <Divider />
      <Divider />
      <Divider />
      <UserSearch />
    </div>
  );
}

export default Profile;

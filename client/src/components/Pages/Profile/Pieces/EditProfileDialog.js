import React from 'react';
import { useParams } from 'react-router-dom';
import { userGraphql } from '../../../../graphql/user';
import { useCurrentUser, useQueryWithError } from '../../../../helpers/customHooks';
import FormDialog from '../../../Common/Forms/FormDialog';
import InputField from '../../../Common/Forms/InputField';

function EditProfileDialog(props) {
  const { openButton, title = 'Edit Profile', onSubmit, ...rest } = props;

  const { id } = useParams();
  const { loading, data, refetch } = useQueryWithError(
    userGraphql.USER,
    {
      variables: {
        id,
      },
    },
  );

  const { currentUser } = useCurrentUser();

  //const history = useHistory();

  // const [createGame] = useMutationWithError(gameGraphql.CREATE_GAME, {
  //   update(cache, { data: { createGame } }) {
  //     cache.modify({
  //       fields: {
  //         games(existingGames = []) {
  //           const newGameRef = cache.writeFragment({
  //             data: createGame,
  //             fragment: gameGraphql.BASIC_GAME_FRAGMENT,
  //           });

  //           return [...existingGames, newGameRef];
  //         },
  //       },
  //     });
  //   },
  // });

  const handleSubmit = async (values) => {
    onSubmit && onSubmit(values);

    // const response = await createGame({
    //   variables: {
    //     params: values,
    //   },
    // });

    // const newGameId = _.get(response, 'data.createGame.id');
    // // navigate to the newly created game
    // if (newGameId) {
    //   history.replace(`/create/${newGameId}`);
    // }
  };

  const formFields = [
    {
      name: 'display name',
      Component: InputField,
      noWrap: true,
    },
    {
      name: 'email',
      Component: InputField,
      noWrap: true,
    },
  ];

  if(currentUser.id == data.user.id){
    return (
      <FormDialog
        {...{
          title,
          openButton,
          formFields,
          onSubmit: handleSubmit,
          maxWidth: 'xs',
          ...rest,
        }}
      />
    );
  }
  else {
    return <div></div>
  }
}

export default EditProfileDialog;

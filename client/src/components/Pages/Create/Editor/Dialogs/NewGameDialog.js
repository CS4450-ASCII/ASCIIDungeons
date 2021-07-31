import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { graphqlGame } from '../../../../../graphql/game';
import { useMutationWithError } from '../../../../../helpers/customHooks';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';

function NewGameDialog(props) {
  const { openButton, title = 'New Game', onSubmit, ...rest } = props;
  const history = useHistory();

  const [createGame] = useMutationWithError(graphqlGame.CREATE_GAME, {
    update(cache, { data: { createGame } }) {
      cache.modify({
        fields: {
          games(existingGames = []) {
            const newGameRef = cache.writeFragment({
              data: createGame,
              fragment: graphqlGame.BASIC_GAME_FRAGMENT,
            });

            return [...existingGames, newGameRef];
          },
        },
      });
    },
  });

  const handleSubmit = async (values) => {
    // TODO: Send an actual mutation to create a game at the backend.
    onSubmit && onSubmit(values);

    const response = await createGame({
      variables: {
        params: values,
      },
    });

    const newGameId = _.get(response, 'data.createGame.id');
    // navigate to the newly created game
    if (newGameId) {
      history.replace(`/create/${newGameId}`);
    }
  };

  const formFields = [
    {
      name: 'title',
      Component: InputField,
      noWrap: true,
    },
    {
      name: 'description',
      Component: InputField,
      multiline: true,
      rows: 8,
    },
  ];

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

export default NewGameDialog;

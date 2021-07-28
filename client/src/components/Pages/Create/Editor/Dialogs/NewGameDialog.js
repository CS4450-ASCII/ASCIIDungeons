import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';

function NewGameDialog(props) {
  const { openButton, title = 'New Game', onSubmit, ...rest } = props;
  const history = useHistory();

  const handleSubmit = (values) => {
    // TODO: Send an actual mutation to create a game at the backend.
    onSubmit && onSubmit(values);
    let games = JSON.parse(localStorage.getItem('games')) || [];

    const randomId = _.random(1, 100000);
    games.push({ id: randomId, ...values });

    localStorage.setItem('games', JSON.stringify(games));

    // navigate to the newly created game
    history.replace(`/create/${randomId}`);
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

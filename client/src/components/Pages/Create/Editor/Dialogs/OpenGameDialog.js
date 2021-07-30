import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Dialog from '../../../../Common/Dialog';
import ScrollList from '../../../../Common/ScrollList/ScrollList';

function OpenGameDialogContainer(props) {
  // TODO: Query for a list of games created by the current user.
  // id, title, and description.
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(JSON.parse(localStorage.getItem('games')) || []);
  }, []);

  return <OpenGameDialog {...props} games={games} />;
}

export function OpenGameDialog(props) {
  const classes = useStyles();
  const { openButton, games, ...rest } = props;

  const [selectedGame, setSelectedGame] = useState(null);

  const { path, url } = useRouteMatch();
  const history = useHistory();

  const content = (
    <>
      <ScrollList
        rows={games}
        onSelectionChange={(selection) => setSelectedGame(selection)}
        emptyMessage={
          'No games found. Click the "New Game" option to create a new one.'
        }
      />
      <div className={classes.descriptionBox}>
        {_.get(
          selectedGame,
          'description',
          selectedGame ? '(No description)' : 'Nothing selected.',
        )}
      </div>
    </>
  );

  const onSubmit = () => {
    // TODO: Navigate to the editor game route with specified id.
    history.replace(
      `/create/${_.get(selectedGame, 'id')}/${_.get(
        selectedGame,
        'lastViewedLevel.id',
        '',
      )}`,
    );
  };

  const onClose = () => {
    setSelectedGame(null);
  };

  return (
    <div className={classes.root}>
      <Dialog
        {...{
          title: 'Open Game',
          openButton,
          content,
          submitButtonProps: {
            text: 'Open',
            disabled: !selectedGame,
          },
          onSubmit,
          onClose,
          fullWidth: true,
          maxWidth: 'sm',
          ...rest,
        }}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {},
  descriptionBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    fontFamily: ['IBMBios'],
    fontSize: '1.5em',
    padding: 10,
  },
});

export default OpenGameDialogContainer;

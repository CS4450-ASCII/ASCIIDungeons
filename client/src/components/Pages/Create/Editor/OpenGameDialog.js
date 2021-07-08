import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import Dialog from '../../../Common/Dialog';
import ScrollList from './ScrollList';

function OpenGameDialog(props) {
  const classes = useStyles();
  const { openButton } = props;

  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: 'Adventure Game',
      description:
        'Go on an epic adventure to find the epic item of epicness to become a legend.'
    },
    {
      id: 2,
      title: 'Amazing Game',
      description: 'An amazing game full of wonder and bliss.'
    },
    {
      id: 3,
      title: 'Amazing Game 2',
      description: 'A second amazing game full of wonder and bliss.'
    },
    {
      id: 4,
      title: 'Dungeons of Death',
      description: "Death is everywhere. Don't die!"
    },
    {
      id: 5,
      title: 'Dungeons of Death 2',
      description: "Death is STILL everywhere. Don't die!"
    },
    {
      id: 6,
      title: 'Great Game',
      description: 'Such a great game'
    }
  ];

  const content = (
    <>
      <ScrollList
        rows={games}
        onSelectionChange={selection => setSelectedGame(selection)}
      />
      <div className={classes.descriptionBox}>
        {_.get(selectedGame, 'description', 'Nothing selected.')}
      </div>
    </>
  );

  const onSubmit = () => {
    alert(`selected game id: ${_.get(selectedGame, 'id')}`);
    // TODO: Navigate to the editor game route with specified id.
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
            disabled: !selectedGame
          },
          onSubmit,
          onClose,
          fullWidth: true,
          maxWidth: 'sm'
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
    padding: 10
  }
});

export default OpenGameDialog;

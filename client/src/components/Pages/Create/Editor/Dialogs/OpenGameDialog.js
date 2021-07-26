import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { dummyGameData } from '../../../../../stories/dummyData';
import Dialog from '../../../../Common/Dialog';
import ScrollList from '../../../../Common/ScrollList';

function OpenGameDialog(props) {
  const classes = useStyles();
  const { openButton, games = dummyGameData, ...rest } = props;

  const [selectedGame, setSelectedGame] = useState(null);

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
          maxWidth: 'sm',
          ...rest
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

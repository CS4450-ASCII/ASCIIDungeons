import { Button, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import Dialog from '../../../Common/Dialog';
import ScrollList from './ScrollList';

function OpenGameDialog(props) {
  const classes = useStyles();
  const { openButton } = props;

  const [description, setDescription] = useState('Nothing Selected');

  const games = [
    {
      title: 'Adventure Game',
      description:
        'Go on an epic adventure to find the epic item of epicness to become a legend.'
    },
    {
      title: 'Amazing Game',
      description: 'An amazing game full of wonder and bliss.'
    },
    {
      title: 'Amazing Game 2',
      description: 'A second amazing game full of wonder and bliss.'
    },
    {
      title: 'Dungeons of Death',
      description: "Death is everywhere. Don't die!"
    },
    {
      title: 'Dungeons of Death 2',
      description: "Death is STILL everywhere. Don't die!"
    },
    {
      title: 'Great Game',
      description: 'Such a great game'
    }
  ];

  const rows = _.map(games, 'title');

  const content = (
    <>
      <ScrollList
        rows={rows}
        onSelectionChange={index =>
          setDescription(_.get(games, `[${index}].description`))
        }
      />
      <div className={classes.descriptionBox}>{description}</div>
    </>
  );

  const actions = <Button color='secondary'>Open</Button>;

  return (
    <div className={classes.root}>
      <Dialog
        {...{
          title: 'Open Game',
          openButton,
          content,
          actions,
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

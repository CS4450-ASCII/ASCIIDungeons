import React from 'react';
import {
  Divider,
  ListItem,
  ListItemText,
  makeStyles,
  TextField
} from '@material-ui/core';
import Dialog from '../../../Common/Dialog';
import { FixedSizeList } from 'react-window';
import InputField from '../../../Common/InputField';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`List ${index}`} />
    </ListItem>
  );
}

function OpenGameDialog(props) {
  const classes = useStyles();
  const { openButton } = props;

  const content = (
    <>
      <FixedSizeList height={200} width={500} itemSize={46} itemCount={200}>
        {renderRow}
      </FixedSizeList>
      <Divider />
      <div className={classes.descriptionBox}></div>
    </>
  );

  const actionButtons = <></>;

  return (
    <div className={classes.root}>
      <Dialog {...{ title: 'Open Game', openButton, content, actionButtons }} />
    </div>
  );
}

const useStyles = makeStyles({
  root: {},
  descriptionBox: {
    width: '100%',
    height: 300,
    backgroundColor: 'white'
  }
});

export default OpenGameDialog;

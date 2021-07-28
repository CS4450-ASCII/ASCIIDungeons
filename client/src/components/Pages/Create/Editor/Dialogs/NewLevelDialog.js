import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';
import { GameContext } from '../Editor';

function NewLevelDialog(props) {
  const classes = useStyles();
  const { openButton, title = 'New Level', ...dialogProps } = props;

  const history = useHistory();
  const { currentGame } = useContext(GameContext);

  const onSubmit = (values) => {
    // TODO: Send an mutation to the backend that creates a new level.
    let levels = JSON.parse(localStorage.getItem('levels')) || [];
    const randomId = _.random(1, 100000);
    levels.push({
      id: randomId,
      ...values,
      gameId: _.get(currentGame, 'id'),
    });

    localStorage.setItem('levels', JSON.stringify(levels));

    // redirect to the level url
    history.push(`/create/${_.get(currentGame, 'id')}/${randomId}`);
  };

  const formFields = [
    {
      name: 'title',
      Component: InputField,
      nowWrap: true,
    },
    {
      name: 'width',
      Component: InputField,
      type: 'number',
      endLabel: 'Squares',
      inputWidth: 140,
      inputProps: {
        dir: 'rtl',
      },
      nowWrap: true,
    },
    {
      name: 'height',
      Component: InputField,
      type: 'number',
      endLabel: 'Squares',
      inputWidth: 140,
      inputProps: {
        dir: 'rtl',
      },
      nowWrap: true,
    },
  ];

  const validationSchema = Yup.object().shape({
    width: Yup.number().required('Width is required.'),
    height: Yup.number().required('Height is required.'),
  });

  const initialValues = {
    width: 40,
    height: 40,
  };

  return (
    <FormDialog
      {...{
        title,
        openButton,
        onSubmit,
        formFields,
        validationSchema,
        initialValues,
        ...dialogProps,
      }}
    />
  );
}

const useStyles = makeStyles({
  root: {},
});

export default NewLevelDialog;

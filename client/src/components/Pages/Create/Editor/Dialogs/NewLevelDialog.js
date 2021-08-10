import { makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { levelGraphql } from '../../../../../graphql/level';
import { useMutationWithError } from '../../../../../helpers/customHooks';
import FormDialog from '../../../../Common/Forms/FormDialog';
import InputField from '../../../../Common/Forms/InputField';
import { GameContext } from '../Editor';

function NewLevelDialog(props) {
  const classes = useStyles();
  const { openButton, title = 'New Level', ...dialogProps } = props;

  const history = useHistory();
  const { currentGame } = useContext(GameContext);

  const [createLevel] = useMutationWithError(levelGraphql.CREATE_LEVEL, {
    update(cache, { data: { createLevel } }) {
      cache.modify({
        fields: {
          levels(existingLevels = []) {
            const newLevelRef = cache.writeFragment({
              data: createLevel,
              fragment: levelGraphql.BASIC_LEVEL_FRAGMENT,
            });
            return [...existingLevels, newLevelRef];
          },
        },
      });
    },
  });

  const onSubmit = async (values) => {
    const response = await createLevel({
      variables: {
        params: {
          ...values,
          gameId: _.chain(currentGame).get('id').parseInt().value(),
        },
      },
    });

    const newLevelIndex = _.get(response, 'data.createLevel.levelIndex');

    if (newLevelIndex) {
      // redirect to the level url
      history.push(`/create/${_.get(currentGame, 'id')}/${newLevelIndex}`);
    }
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

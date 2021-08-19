import { makeStyles, withTheme } from '@material-ui/core';
import _ from 'lodash';
import React, { Fragment, useContext, useState } from 'react';
import { Field } from 'react-final-form';
import FormDialog from '../../../Common/Forms/FormDialog';
import InputField from '../../../Common/Forms/InputField';
import { Cursor } from '../../../Game/Engine/Components/Cursor';
import { Map } from '../../../Game/Engine/Components/Map';
import GameEngine from '../../../Game/Engine/GameEngine';
import { EditorContext } from './Editor';

function LevelEditor(props) {
  const classes = useStyles();
  const { showGrid } = props;

  const [ModalComponent, setModalComponent] = useState(null);
  const [modalProps, setModalProps] = useState({});

  const { currentLevelIndex } = useContext(EditorContext);

  return (
    <Fragment key={currentLevelIndex}>
      <Field name='gridItems'>
        {({ input: { value, onChange } }) => (
          <GameEngine
            showGrid={showGrid}
            objects={[
              new Map({
                gridItems: value,
                onSpaceChange: (values) => {
                  console.log(values);
                },
              }),
              new Cursor({
                // TODO: Put this method in its own component
                onLeftClick: (object, x, y, setMapSpace, clearMapSpace) => {
                  if (!_.get(object, 'dataTemplate')) return;
                  const objectId = `${x},${y}`;
                  setModalProps({
                    key: objectId,
                    objectId,
                    initiallyOpen: true,
                    openButton: <div />,
                    formFields: [
                      {
                        name: 'title',
                        Component: InputField,
                        noWrap: true,
                      },
                      {
                        // TODO: Convert to dropdown list
                        name: 'goToLevelId',
                        label: 'Go To Level',
                        Component: InputField,
                        inputWidth: 140,
                        noWrap: true,
                      },
                      {
                        // TODO: Convert to dropdown list
                        name: 'goToStairsId',
                        label: 'Go To Stairs',
                        Component: InputField,
                        inputWidth: 140,
                        noWrap: true,
                      },
                    ],
                    title: 'Edit Stairs',
                    initialValues: {
                      title: object.title,
                    },
                    onCancel: () => {
                      clearMapSpace(x, y);
                    },
                    onSubmit: (values, props) => {
                      const stairAttributes = {
                        objectId: _.get(props, 'objectId'),
                        ...object,
                        ...values,
                      };
                      setMapSpace(x, y, stairAttributes);
                    },
                  });
                },
              }),
            ]}
          />
        )}
      </Field>
      <FormDialog {...modalProps} />
    </Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  levelEditorRoot: {},
}));

LevelEditor.propTypes = {};

LevelEditor.defaultProps = {};

export default withTheme(LevelEditor);

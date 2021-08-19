import { makeStyles, withTheme } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext, useState } from 'react';
import { Field } from 'react-final-form';
import FormDialog from '../../../Common/Forms/FormDialog';
import { Cursor } from '../../../Game/Engine/Components/Cursor';
import { Map } from '../../../Game/Engine/Components/Map';
import GameEngine from '../../../Game/Engine/GameEngine';
import { displayStairsDialog } from './Dialogs/StairsDialog';
import { EditorContext } from './Editor';

function LevelEditor(props) {
  const classes = useStyles();
  const { showGrid } = props;

  const [ModalComponent, setModalComponent] = useState(null);
  const [modalProps, setModalProps] = useState({});

  const { currentGame } = useContext(EditorContext);

  // const { data, loading } = useQueryWithError(levelGraphql.QUERY_LEVELS, {
  //   variables: { gameId },
  // });

  // if (loading) return <LoadingContainer />;

  return (
    <>
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
                onLeftClick: displayStairsDialog(
                  setModalProps,
                  _.get(currentGame, 'levels', []),
                ),
              }),
            ]}
          />
        )}
      </Field>
      <FormDialog {...modalProps} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  levelEditorRoot: {},
}));

LevelEditor.propTypes = {};

LevelEditor.defaultProps = {};

export default withTheme(LevelEditor);

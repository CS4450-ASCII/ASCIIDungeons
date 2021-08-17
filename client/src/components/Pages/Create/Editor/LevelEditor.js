import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';
import { Cursor } from '../../../Game/Engine/Components/Cursor';
import { Map } from '../../../Game/Engine/Components/Map';
import GameEngine from '../../../Game/Engine/GameEngine';

function LevelEditor(props) {
  const classes = useStyles();
  const { showGrid } = props;

  return (
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
            new Cursor(),
          ]}
        />
      )}
    </Field>
  );
}

const useStyles = makeStyles((theme) => ({
  levelEditorRoot: {},
}));

LevelEditor.propTypes = {};

LevelEditor.defaultProps = {};

export default withTheme(LevelEditor);

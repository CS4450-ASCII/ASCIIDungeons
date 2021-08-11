import { makeStyles, withTheme } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';
import GameEngine from '../../../Game/Engine/GameEngine';

function LevelEditor(props) {
  const classes = useStyles();
  const { showGrid } = props;

  return (
    <Field name='gridItems'>
      {({ input: { value, onChange } }) => (
        <GameEngine
          showCursor
          showGrid={showGrid}
          mapProps={{
            gridItems: value,
            onSpaceChange: (values) => {
              console.log(values);
            },
          }}
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

import { Grid, makeStyles, Typography, withTheme } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { Cursor } from '../../../../Game/Engine/Components/Cursor';
import ObjectIcon from './ObjectIcon';

function ObjectIconGroup(props) {
  const classes = useStyles();
  const { gameObjects, onSelectedObjectChange } = props;
  const [selectedObject, setSelectedObject] = useState();

  const handleSelectionChange = (selectedObject) => {
    setSelectedObject(selectedObject);
    onSelectedObjectChange && onSelectedObjectChange(selectedObject);
    Cursor.gameObject = selectedObject;
  };

  const objectIcons = gameObjects.map((gameObject) => (
    <Grid item onClick={() => handleSelectionChange(gameObject)}>
      <ObjectIcon
        gameObject={gameObject}
        isSelected={gameObject.id === _.get(selectedObject, 'id')}
      />
    </Grid>
  ));

  return (
    <div className={classes.objectIconGroupRoot}>
      {gameObjects.length > 0 ? (
        <Grid container justifyContent={'left'} alignItems={'center'}>
          {objectIcons}
        </Grid>
      ) : (
        <Typography className={classes.emptyMessage}>
          No objects found.
        </Typography>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  objectIconGroupRoot: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.gray.dark,
    '& .MuiGrid-root.MuiGrid-item': {
      // border: '1px yellow solid',
      width: 'min-content',
    },
  },
  emptyMessage: {
    padding: 10,
  },
}));

ObjectIconGroup.propTypes = {
  gameObjects: PropTypes.arrayOf(PropTypes.object),

  setSelectedCharacter: PropTypes.func,
};

ObjectIconGroup.defaultProps = {
  gameObjects: [],

  onSelectedObjectChange: () => {},
};

export default withTheme(ObjectIconGroup);

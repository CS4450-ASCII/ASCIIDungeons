import { Grid, makeStyles, withTheme } from '@material-ui/core';
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

  const objectIcons = gameObjects.map((object) => (
    <Grid item onClick={() => handleSelectionChange(object)}>
      <ObjectIcon
        object={object}
        isSelected={object.id === _.get(selectedObject, 'id')}
      />
    </Grid>
  ));

  return (
    <div className={classes.objectIconGroupRoot}>
      <Grid container justifyContent={'left'} alignItems={'center'}>
        {objectIcons}
      </Grid>
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

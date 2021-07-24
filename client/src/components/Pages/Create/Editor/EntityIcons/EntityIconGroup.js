import { Grid, makeStyles, withTheme } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import EntityIcon from './EntityIcon';

function EntityIconGroup(props) {
  const classes = useStyles();
  const { entities, onSelectedEntityChange } = props;
  const [selectedEntity, setSelectedEntity] = useState();

  const handleSelectionChange = (selectedEntity) => {
    setSelectedEntity(selectedEntity);
    onSelectedEntityChange && onSelectedEntityChange(selectedEntity);
  };

  const entityIcons = entities.map((entity) => (
    <Grid item onClick={() => handleSelectionChange(entity)}>
      <EntityIcon
        entity={entity}
        isSelected={entity.id === _.get(selectedEntity, 'id')}
      />
    </Grid>
  ));

  return (
    <div className={classes.entityIconGroupRoot}>
      <Grid container justifyContent={'left'} alignItems={'center'}>
        {entityIcons}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  entityIconGroupRoot: {
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

EntityIconGroup.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object),

  setSelectedCharacter: PropTypes.func,
};

EntityIconGroup.defaultProps = {
  entities: [],

  onSelectedEntityChange: () => {},
};

export default withTheme(EntityIconGroup);

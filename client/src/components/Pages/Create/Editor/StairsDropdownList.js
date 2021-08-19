import { makeStyles, withTheme } from '@material-ui/core';
import _ from 'lodash';
import React, { useContext } from 'react';
import DropdownList from '../../../Common/Forms/DropdownList';
import { FormContext } from '../../../Common/Forms/FormComponent';
import { parseMapData } from '../../../Game/Engine/Tools/Translator';

function StairsDropdownList(props) {
  const classes = useStyles();
  const { levels } = props;

  const { formValues } = useContext(FormContext);

  const selectedGoToLevelId = _.get(formValues, 'goToLevelId');
  const stairsData = _.chain(levels)
    .find({ id: selectedGoToLevelId })
    .get('stairsData')
    .value();

  let options = parseMapData(stairsData);
  return (
    <DropdownList
      {...{
        ...props,
        options,
        valueColumn: 'objectId',
        labelColumn: (option) => {
          return `${option.title} (${option.objectId})`;
        },
      }}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  stairsDropdownListRoot: {},
}));

StairsDropdownList.propTypes = {};

StairsDropdownList.defaultProps = {};

export default withTheme(StairsDropdownList);

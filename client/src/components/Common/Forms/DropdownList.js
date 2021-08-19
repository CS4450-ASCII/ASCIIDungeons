import { makeStyles, MenuItem, withTheme } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import InputField from './InputField';

// function DropdownListContainer(props) {
//   const { query, queryKey, queryOptions, ...dropdownProps } = props;
//   const { data, loading } = useQueryWithError(query, {
//     fetchPolicy: 'cache-first',
//     ...dropdownProps,
//   });
//   return <DropdownList {...dropdownProps} options={_.get(data, queryKey)} />;
// }

function DropdownList(props) {
  const classes = useStyles();
  const { options, labelColumn = 'title', valueColumn = 'id' } = props;

  return (
    <InputField select {...props}>
      {options.map((option) => {
        const label =
          _.invoke(props, 'labelColumn', option) || _.get(option, labelColumn);
        return <MenuItem value={_.get(option, valueColumn)}>{label}</MenuItem>;
      })}
    </InputField>
  );
}

const useStyles = makeStyles((theme) => ({
  dropDownListRoot: {},
}));

DropdownList.propTypes = {
  options: PropTypes.array,
};

DropdownList.defaultProps = {
  options: [],
};

export default withTheme(DropdownList);

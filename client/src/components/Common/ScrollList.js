import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import { themeVariables } from '../../muiAsciiTheme';
import PropTypes from 'prop-types';

function ScrollList(props) {
  const classes = useStyles();
  const { rows = [], onSelectionChange = () => {}, ...listProps } = props;

  const [selectedIndex, setSelectedIndex] = useState(null);

  function renderRow(props) {
    const { index, style } = props;

    const selected = selectedIndex === index;

    const handleChange = index => {
      onSelectionChange(rows[index]);
      setSelectedIndex(index);
    };

    return (
      <ListItem
        button
        style={{
          ...style,
          color: selected ? themeVariables.palette.primary.main : 'white',
          textAlign: 'center'
        }}
        key={index}
        onClick={() => handleChange(index)}
        selected={selected}
      >
        <ListItemText primary={_.get(rows, `[${index}].title`)} />
      </ListItem>
    );
  }

  return (
    <FixedSizeList
      height={240}
      width='100%'
      style={{
        backgroundColor: themeVariables.palette.gray.dark
      }}
      itemSize={60}
      itemCount={rows.length}
      {...listProps}
    >
      {renderRow}
    </FixedSizeList>
  );
}

const useStyles = makeStyles({
  root: {}
});

ScrollList.propTypes = {
  rows: PropTypes.array,

  onSelectionChange: PropTypes.func
};

export default ScrollList;

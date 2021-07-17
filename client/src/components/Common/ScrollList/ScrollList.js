import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import { themeVariables } from '../../../muiAsciiTheme';
import PropTypes from 'prop-types';

function ScrollList(props) {
  const classes = useStyles();
  const { rows, onSelectionChange, height, itemSize, alignItems } = props;

  const [selectedIndex, setSelectedIndex] = useState(null);

  function renderRow(props) {
    const { index, style } = props;

    const selected = selectedIndex === index;

    const handleChange = (index) => {
      onSelectionChange(rows[index]);
      setSelectedIndex(index);
    };

    return (
      <ListItem
        button
        style={{
          ...style,
          color: selected ? themeVariables.palette.primary.main : 'white',
          textAlign: alignItems,
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
      height={height}
      width='100%'
      style={{
        backgroundColor: themeVariables.palette.gray.dark,
      }}
      itemSize={itemSize}
      itemCount={rows.length}
    >
      {renderRow}
    </FixedSizeList>
  );
}

const useStyles = makeStyles({
  root: {},
});

ScrollList.propTypes = {
  /**
   * The rows of data to display as options in the scroll list.
   */
  rows: PropTypes.array,

  /**
   * The function to call whenever the selected item is changed.
   * Of format: (selectedItem) => { };
   */
  onSelectionChange: PropTypes.func,

  /**
   * The view height of the scroll list. (Required)
   */
  height: PropTypes.number.isRequired,

  /**
   * The size of the list items. (Required)
   */
  itemSize: PropTypes.number.isRequired,

  /**
   * The alignment of the item text.
   * Options: 'left', 'center', 'right'
   */
  alignItems: PropTypes.oneOf('left', 'center', 'right'),
};

ScrollList.defaultProps = {
  rows: [],
  height: 240,
  itemSize: 60,
  alignItems: 'center',
  onSelectionChange: (selection) => alert(JSON.stringify(selection)),
};

export default ScrollList;

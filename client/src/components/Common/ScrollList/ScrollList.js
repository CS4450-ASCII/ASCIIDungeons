import {
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  withTheme,
} from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import { themeVariables } from '../../../muiAsciiTheme';

function ScrollList(props) {
  const classes = useStyles();
  const {
    rows,
    onSelectionChange,
    height,
    itemSize,
    alignItems,
    emptyMessage,
    initialSelection,
  } = props;

  const [selectedIndex, setSelectedIndex] = useState(initialSelection);

  function renderRow(props) {
    const { index, style } = props;

    const selected = selectedIndex === index;

    const handleChange = (index) => {
      onSelectionChange({ selection: rows[index], selectedIndex: index });
      setSelectedIndex(index);
    };

    const title = _.get(rows, `[${index}].title`, 'Untitled');

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
        title={title}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            style: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </ListItem>
    );
  }

  // TODO: Scroll to the currently selected item so it is shown on load.
  return rows.length > 0 ? (
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
  ) : (
    <Typography className={classes.emptyMessage}>{emptyMessage}</Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  emptyMessage: {
    backgroundColor: theme.palette.gray.dark,
    color: 'white',
    padding: 10,
    height: 100,
  },
}));

ScrollList.propTypes = {
  /**
   * The rows of data to display as options in the scroll list.
   */
  rows: PropTypes.array,

  /**
   * The function to call whenever the selected item is changed.
   * Of format: ({ selectedItem, index }) => { };
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
  alignItems: PropTypes.oneOf(['left', 'center', 'right']),
};

ScrollList.defaultProps = {
  rows: [],
  height: 240,
  itemSize: 60,
  alignItems: 'center',
  onSelectionChange: ({ selection, index }) => alert(JSON.stringify(selection)),
  emptyMessage: 'Nothing found.',
};

export default withTheme(ScrollList);

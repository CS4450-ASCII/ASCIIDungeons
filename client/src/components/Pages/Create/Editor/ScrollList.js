import React, { useState } from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import { themeVariables } from '../../../../muiAsciiTheme';

function ScrollList(props) {
  const classes = useStyles();
  const { rows = [], onSelectionChange = () => {}, ...listProps } = props;

  const [selectedRow, setSelectedRow] = useState(null);

  function renderRow(props) {
    const { index, style } = props;

    const selected = selectedRow === index;

    const handleChange = index => {
      onSelectionChange(index);
      setSelectedRow(index);
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
        <ListItemText primary={rows[index]} />
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

export default ScrollList;

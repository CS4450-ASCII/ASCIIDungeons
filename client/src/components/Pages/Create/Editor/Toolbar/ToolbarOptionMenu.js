import {
  Button,
  ClickAwayListener,
  makeStyles,
  MenuList,
  Popper,
  withTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import MenuOption from './MenuOption';
import MenuDivider from './Menus/MenuDivider';

function ToolbarOptionMenu(props) {
  const classes = useStyles();
  const { label, menuGroups, endDivider, ...rest } = props;

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div className={classes.ToolbarOptionMenuRoot} {...rest}>
      <Button
        className={classes.openButton}
        ref={anchorRef}
        onClick={handleToggle}
      >
        {label}
      </Button>
      {endDivider && <span className={classes.divider}>|</span>}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={'bottom-start'}
        className={classes.menu}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList>
            {menuGroups.map((menuGroup, index) => {
              const addDivider = index !== menuGroups.length - 1;
              return (
                <>
                  {menuGroup.map((menuOption) => (
                    <MenuOption {...menuOption} />
                  ))}
                  {addDivider && <MenuDivider />}
                </>
              );
            })}
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  ToolbarOptionMenuRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: theme.palette.gray.dark,
    minWidth: '275px',
    color: 'white',
  },
  openButton: {
    color: 'black',
    height: '35px',
    padding: '0 20px',
  },
  divider: {
    color: 'black',
    fontSize: '1.5em',
  },
}));

ToolbarOptionMenu.propTypes = {
  /**
   * The label to give the open button.
   */
  label: PropTypes.string,

  menuGroups: PropTypes.array,
};

ToolbarOptionMenu.defaultProps = {
  label: 'Untitled',

  menuGroups: [],
};

export default withTheme(ToolbarOptionMenu);

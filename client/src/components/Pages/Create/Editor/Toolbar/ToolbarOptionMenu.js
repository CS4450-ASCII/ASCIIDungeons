import {
  Button,
  ClickAwayListener,
  makeStyles,
  MenuList,
  Popper,
  withTheme,
} from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { EditorContext } from '../Editor';
import MenuOption from './MenuOption';
import MenuDivider from './Menus/MenuDivider';

function ToolbarOptionMenu(props) {
  const classes = useStyles();
  const { label, menuGroups, endDivider, ...rest } = props;

  const { currentGame, currentLevel } = useContext(EditorContext);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [currentGame, currentLevel]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div className={classes.toolbarOptionMenuRoot} {...rest}>
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
                <div key={`menu-group-${index}`}>
                  {menuGroup.map((menuOption, index) => (
                    <MenuOption
                      key={`menu-option-${index}`}
                      {...menuOption}
                      onClick={() => {
                        _.invoke(menuOption, 'onClick');
                        if (menuOption.closeMenuAfterClick) handleClose();
                      }}
                    />
                  ))}
                  {addDivider && <MenuDivider />}
                </div>
              );
            })}
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarOptionMenuRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: theme.palette.gray.dark,
    minWidth: '275px',
    color: 'white',
    zIndex: 4,
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

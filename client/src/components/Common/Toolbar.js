import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '@material-ui/core/Typography';

import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '1536px'
  },
  button: {
    color: 'black'
  },
  publish: {
    position: 'relative',
    left: '60%',
    color: 'black'
  },
  closeicon: {
    border: '1px',
    backgroundColor: 'gray',
    fontSize: '30px',
    color: 'white'
  },
  viewcloseicon: {
    border: '1px',
    marginRight: '20px',
    backgroundColor: 'lightgray',
    fontSize: '30px',
    color: 'white'
  },
  toolbar: {
    backgroundColor: 'lightgray',
    height: '5px'
  },
  lines: {
    marginLeft: '20px',
    marginRight: '20px',
    color: 'black'
  },
  menulist: {
    backgroundColor: 'gray'
  },
  menuitem: {
    color: 'white'
  }
});

function ToolbarObject(props) {
  const classes = useStyles();
  const {} = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Toolbar className={classes.toolbar}>
      {/* <div className='fileButton'>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'file-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            File
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='file-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>New Game</MenuItem>
                      <MenuItem onClick={handleClose}>Open</MenuItem>
                      <p>-------------</p>
                      <MenuItem onClick={handleClose}>Save Ctrl-s</MenuItem>
                      <MenuItem onClick={handleClose}>Save As</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <p>|</p>
        <div className='editButton'>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'edit-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            Edit
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='File-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Undo Ctrl-z</MenuItem>
                      <MenuItem onClick={handleClose}>Redo Ctrl-V</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <p>|</p>
        <div className='viewButton'>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'view-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            View
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='view-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Show Grid</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div> */}

      <PopupState variant='popper' popupId='demo-popup-popper'>
        {(popupState) => (
          <div>
            <Button
              className={classes.button}
              ref={anchorRef}
              aria-controls={open ? 'edit-list-grow' : undefined}
              aria-haspopup='true'
              {...bindToggle(popupState)}
            >
              File
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        className={classes.menulist}
                        autoFocusItem={open}
                        id='file-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          New Game
                        </MenuItem>
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          Open
                        </MenuItem>
                        <p>--------------------------------------</p>
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          Save Ctrl-s
                        </MenuItem>
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          Save As
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
      <p className={classes.lines}>|</p>
      <PopupState variant='popper' popupId='demo-popup-popper'>
        {(popupState) => (
          <div>
            <Button className={classes.button} {...bindToggle(popupState)}>
              Edit
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        className={classes.menulist}
                        autoFocusItem={open}
                        id='File-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          Undo Ctrl-z
                        </MenuItem>
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          Redo Ctrl-V
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
      <p className={classes.lines}>|</p>
      <PopupState variant='popper' popupId='demo-popup-popper'>
        {(popupState) => (
          <div>
            <Button
              className={classes.button}
              ref={anchorRef}
              aria-controls={open ? 'edit-list-grow' : undefined}
              aria-haspopup='true'
              {...bindToggle(popupState)}
            >
              View
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        className={classes.menulist}
                        autoFocusItem={open}
                        id='file-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          className={classes.menuitem}
                          onClick={handleClose}
                        >
                          <button
                            className={classes.viewcloseicon}
                            onClick={handleClose}
                            ref={anchorRef}
                          >
                            X
                          </button>
                          Show Grid
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
      <div className={classes.publish}>
        <h2>Publish?</h2>
      </div>
      <div className={classes.publish}>
        <button
          className={classes.closeicon}
          onClick={handleClose}
          ref={anchorRef}
        >
          X
        </button>
        {/* <CloseIcon
            className={classes.closeicon}
            //style={{ fill: 'white', fontSize: 35 }}
            onClick={handleClose}
          ></CloseIcon> */}
      </div>
    </Toolbar>
  );
}

export default ToolbarObject;

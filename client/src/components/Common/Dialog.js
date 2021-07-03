import {
  ButtonBase,
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  makeStyles,
  Typography
} from '@material-ui/core';
import React, { useState } from 'react';

function Dialog(props) {
  const classes = useStyles();
  const { children, title, openButton, actions, content, ...dialogProps } =
    props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div onClick={handleClickOpen}>{openButton}</div>
      <MuiDialog
        onClose={handleClose}
        open={open}
        scroll='body'
        {...dialogProps}
        classes={{ paper: classes.dialogPaper }}
      >
        <MuiDialogTitle disableTypography style={{ position: 'relative' }}>
          <Typography variant='h2'>{title}</Typography>
          <ButtonBase className={classes.closeButton} onClick={handleClose}>
            <Typography variant='h2'>X</Typography>
          </ButtonBase>
        </MuiDialogTitle>
        {content && <MuiDialogContent>{content}</MuiDialogContent>}
        {actions && <MuiDialogActions>{actions}</MuiDialogActions>}
        {children({ handleClose })}
      </MuiDialog>
    </div>
  );
}

const useStyles = makeStyles({
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 18
  },
  dialogPaper: {
    maxHeight: 800
  }
});

export default Dialog;

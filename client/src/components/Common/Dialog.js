import {
  Button,
  ButtonBase,
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  makeStyles,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";

function Dialog(props) {
  const classes = useStyles();
  const {
    children,
    title,
    openButton,
    content,
    submitButtonProps: buttonProps = {},
    onSubmit,
    onClose,
    initiallyOpen = false,
    ...dialogProps
  } = props;

  const { text: buttonText, ...submitButtonProps } = buttonProps;

  const [open, setOpen] = useState(initiallyOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setOpen(false);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
    handleClose();
  };

  return (
    <div className={classes.root}>
      <div onClick={handleClickOpen}>{openButton}</div>
      <MuiDialog
        onClose={handleClose}
        open={open}
        scroll="body"
        {...dialogProps}
      >
        <MuiDialogTitle disableTypography style={{ position: "relative" }}>
          <Typography variant="h2">{title}</Typography>
          <ButtonBase className={classes.closeButton} onClick={handleClose}>
            <Typography variant="h2">X</Typography>
          </ButtonBase>
        </MuiDialogTitle>
        {content && <MuiDialogContent>{content}</MuiDialogContent>}
        {children && children({ handleClose })}
        {buttonText && (
          <MuiDialogActions>
            <Button
              onClick={handleSubmit}
              color="secondary"
              {...submitButtonProps}
            >
              {buttonText}
            </Button>
          </MuiDialogActions>
        )}
      </MuiDialog>
    </div>
  );
}

const useStyles = makeStyles({
  closeButton: {
    position: "absolute",
    right: 20,
    top: 18
  }
});

export default Dialog;

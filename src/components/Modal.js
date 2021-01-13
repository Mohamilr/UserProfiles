import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ModalData from "./ModalData";

const Modal = ({ modalProp, profile, index }) => {
  const { handleClose, open } = modalProp;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
      >
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            X
          </Button>
        </DialogActions>
        <DialogContent>
          <ModalData profile={profile} index={index} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;

// import React, { useState, useEffect } from "react";
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';


// const Modal = ({ profile }) => {
//     const [open, setOpen] = React.useState(false);
//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };

//   return (
//     <div>
//      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open responsive dialog
//       </Button>
//       <Dialog
//         fullScreen={fullScreen}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//         <DialogActions>
//           <Button autoFocus onClick={handleClose} color="primary">
//             X
//           </Button>
//         </DialogActions>
//         <DialogContent>
//           <DialogContentText>
//           <div style={{backgroundColor: 'red'}}>
// sdnmcndcndinn
//               </div>
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//           <DialogContentText>
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//           <DialogContentText>
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//           <DialogContentText>
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
        
//       </Dialog>
//     </div>
//   );
// };

// export default Modal;


import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ModalData from './ModalData';

const Modal = ({ modalProp, profile, index }) => {
    const { handleClose, open } = modalProp;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

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
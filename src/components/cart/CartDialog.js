import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux';

const CartDialog = ({ showResetDialog }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    showResetDialog ? setOpen(true) : setOpen(false)
  }, [showResetDialog]);


  function handleClose() {
    setOpen(false);
  }

  function handleCartReset() {
    setOpen(false);
    // send action !!
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Reset cart?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your cart contains items from chef Matt Massoodi.
            Reset the cart to add items from chef Drew Taylor.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCartReset} variant="outlined" color="secondary" autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  showResetDialog: state.cartReducer.showResetDialog,
});

export default connect(mapStateToProps)(CartDialog);

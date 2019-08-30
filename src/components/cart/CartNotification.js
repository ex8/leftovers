import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: '#f06292',
  },
  close: {
    padding: theme.spacing(0.5),
  },
}));

const CartNotification = ({ sendNotification, notificationMessage }) => {
  const { snackbar, close } = useStyles();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    sendNotification ? setOpen(true) : setOpen(false)
  }, [sendNotification]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ClickAwayListenerProps={{
          mouseEvent: false,
        }}
      >
        <SnackbarContent
          className={snackbar}
          message={notificationMessage}
          action={[
            <IconButton
              key="close"
              className={close}
              color="inherit"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} size="xs" />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
};

const mapStateToProps = state => ({
  sendNotification: state.cartReducer.sendNotification,
  notificationMessage: state.cartReducer.notificationMessage,
});

export default connect(mapStateToProps)(CartNotification);

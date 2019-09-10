import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { SnackbarContent, Typography } from '@material-ui/core';
import { green, amber, blue } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const variantIcon = {
  success: faCheckCircle,
  warning: faExclamationTriangle,
  error: faExclamationCircle,
  info: faInfoCircle,
};

const useStyles = makeStyles(theme => ({
  snack: {
    width: '100%',
  },
  success: {
    backgroundColor: green[700],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: blue[700],
  },
  warning: {
    backgroundColor: amber[700],
  },
  iconVariant: {
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Alert = ({ message, variant }) => {
  const classes = useStyles();
  const icon = variantIcon[variant];
  return (
    <SnackbarContent
      className={clsx(classes[variant], classes.snack)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <FontAwesomeIcon icon={icon} className={clsx(classes.iconVariant)} />
          <Typography>{message}</Typography>
        </span>
      }
    />
  );
};

export default Alert;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, Typography, Paper, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkButton: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const ForgotPassword = () => {
  const { paper, avatar, form, submit, linkButton } = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faFrownOpen} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={form} noValidate>
          <TextField
            variant="outlined" margin="normal" required fullWidth
            id="email" label="Email Address" autoComplete="email"
            name="email" autoFocus
          />
          <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={submit}
          >
            Proceed
          </Button>
        </form>
        <Typography variant="body2">
          Don't have an account? <Link className={linkButton} to="/account/signup">Signup</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};
export default ForgotPassword;
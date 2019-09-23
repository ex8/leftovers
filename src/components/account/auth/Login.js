import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, Typography, Paper, Container, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { login, reset } from '../../../redux/actions/login.actions';
import Alert from '../../layout/Alert';

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

const Login = ({ loading, successMessage, errorMessage, login, reset, history }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    reset();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    reset();
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    login(fields, history);
  };

  const { paper, avatar, form, submit, linkButton } = useStyles();
  const { email, password } = fields;
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faLock} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {successMessage && <Alert variant="success" message={successMessage} />}
        {errorMessage && <Alert variant="error" message={errorMessage} />}
        <form className={form} noValidate onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined" margin="normal" required fullWidth
            id="email" label="Email Address" autoComplete="email"
            name="email" value={email} onChange={handleInputChange} autoFocus
          />
          <TextField
            variant="outlined" margin="normal" required fullWidth
            label="Password" type="password" id="password" autoComplete="current-password"
            name="password" value={password} onChange={handleInputChange}
          />
          <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={submit} disabled={loading}
          >
            {loading && <CircularProgress size={25} color="inherit" />}
            {!loading && 'Login'}
          </Button>
        </form>
        <Typography variant="body2">
          Don't have an account? <Link className={linkButton} to="/account/signup">Signup</Link>.
        </Typography>
        <Typography variant="body2">
          <Link className={linkButton} to="/account/forgot-password">Forgot your password?</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

const mapStateToProps = state => ({
  loading: state.loginReducer.loading,
  successMessage: state.loginReducer.successMessage,
  errorMessage: state.loginReducer.errorMessage,
});

const mapDispatchToProps = {
  login,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Container, Typography, Paper, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, reset } from '../../redux/actions/signup.actions';
import Alert from '../layout/Alert';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkButton: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const Signup = ({ loading, successMessage, errorMessage, signup, reset }) => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    password2: ''
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
    signup(fields);
  };

  const { paper, avatar, form, submit, linkButton } = useStyles();
  const { firstName, lastName, email, username, password, password2 } = fields;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faLock} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        {successMessage && <Alert variant="success" message={successMessage} />}
        {errorMessage && <Alert variant="error" message={errorMessage} />}
        <form className={form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname" variant="outlined" required
                fullWidth id="firstName" label="First Name" autoFocus
                name="firstName" value={firstName} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined" required fullWidth id="lastName"
                label="Last Name" autoComplete="lname"
                name="lastName" value={lastName} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="email"
                label="Email Address" autoComplete="email" type="email"
                name="email" value={email} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="username"
                label="Username" autoComplete="username"
                name="username" value={username} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="password"
                label="Password" type="password" autoComplete="current-password"
                name="password" value={password} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="password2"
                label="Password Again" type="password" autoComplete="current-password"
                name="password2" value={password2} onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={submit} disabled={loading}
          >
            {loading && <CircularProgress size={25} color="inherit" />}
            {!loading && 'Signup'}
          </Button>
        </form>
        <Typography variant="body2">
          Already have an account? <Link className={linkButton} to="/account/login">Login</Link>.
        </Typography>
      </Paper>
    </Container>
  );
}

const mapStateToProps = state => ({
  loading: state.signupReducer.loading,
  successMessage: state.signupReducer.successMessage,
  errorMessage: state.signupReducer.errorMessage,
});

const mapDispatchToProps = {
  signup,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Container, Typography, Paper, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, reset } from '../../../redux/actions/signup.actions';
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

const ChefSignup = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
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
  const { firstName, lastName, email, phone, password, password2 } = fields;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faUserPlus} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Chef Signup
        </Typography>
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
                inputProps={{ type: 'email' }}
                variant="outlined" required fullWidth id="email"
                label="Email Address" autoComplete="email" type="email"
                name="email" value={email} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="phone"
                label="Phone Number" autoComplete="phone"
                name="phone" value={phone} onChange={handleInputChange}
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
            color="primary" className={submit}
          >
            Chef Signup
          </Button>
        </form>
        <Typography variant="body2">
          Already have a chef account? <Link className={linkButton} to="/chef/login">Login</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ChefSignup;

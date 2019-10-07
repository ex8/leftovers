import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Container, Typography, Card, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { isEmail, isMobilePhone } from 'validator'

import Alert from '../../layout/Alert';
import api from '../../utils/api';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  card: {
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

const Signup = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const { firstName, lastName, email, phone, password, password2 } = fields;

  const handleInputChange = e => {
    const { name, value } = e.target;
    reset();
    setFields({
      ...fields,
      [name]: value
    });
  };

  const reset = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(false);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      api.post('/api/account/signup', fields)
        .then(res => {
          if (res.data.success) {
            setSuccessMessage('Account successfully created. You may now login.')
          }
          else {
            setErrorMessage(res.data.message);
          }
          setLoading(false);
        })
        .catch(() => {
          setErrorMessage('You cannot signup at this time.');
          setLoading(false);
        });
    }
    setLoading(false);
  };

  const validateForm = () => {
    if (firstName === '' || lastName === '' || email === '' ||
      phone === '' || password === '' || password2 === '') {
      setErrorMessage('Please fill in all fields.');
      return false;
    }
    else if (password !== password2) {
      setErrorMessage('Please enter matching passwords.');
      return false;
    }
    else if (!isEmail(email)) {
      setErrorMessage('Please enter a valid e-mail address.');
      return false;
    }
    else if (!isMobilePhone(phone)) {
      setErrorMessage('Please enter a valid phone number.');
      return false;
    }
    return true;
  }

  const { card, avatar, form, submit, linkButton } = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Card className={card}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faUserPlus} />
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
            color="primary" className={submit} disabled={loading}
          >
            {loading && <CircularProgress size={25} color="inherit" />}
            {!loading && 'Signup'}
          </Button>
        </form>
        <Typography variant="body2">
          Already have an account? <Link className={linkButton} to="/account/login">Login</Link>.
        </Typography>
      </Card>
    </Container>
  );
}

export default Signup;

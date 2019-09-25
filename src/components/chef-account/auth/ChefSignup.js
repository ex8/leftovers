import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Container, Typography, Paper, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Alert from '../../layout/Alert';
import api from '../../../redux/api';
import BecomeAChefSteps from './steps/BecomeAChefSteps';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    username: '',
    password: '',
    password2: '',
    address: '',
    driversLicense: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      api.post('/api/chef/signup', fields)
        .then(res => {
          if (res.data.success) {

          }
        })
      setSuccessMessage('Chef Account successfully created. You may now login.')
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { firstName, lastName } = fields;
    if (firstName === '' || lastName === '') {
      setErrorMessage('Please enter a valid first and last name');
      return false;
    }
    return true;
  };

  const { paper, avatar, form, submit, linkButton } = useStyles();
  const { firstName, lastName, email, phone, password, password2, address, username, driversLicense } = fields;

  return (
    <Container>
      <CssBaseline />
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faUserPlus} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Chef Signup
        </Typography>
        {successMessage && <Alert variant="success" message={successMessage} />}
        {errorMessage && <Alert variant="error" message={errorMessage} />}
        <form className={form} noValidate onSubmit={handleFormSubmit}>
          <BecomeAChefSteps fields={fields} setFields={setFields} />
          {/* <Grid container spacing={2} justify="space-around">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>General</Typography>
              <TextField
                variant="outlined" required margin="normal"
                fullWidth label="First Name" autoFocus
                name="firstName" value={firstName} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required margin="normal" fullWidth
                label="Last Name" name="lastName" value={lastName} onChange={handleInputChange}
              />
              <TextField
                inputProps={{ type: 'email' }} margin="normal"
                variant="outlined" required fullWidth label="Email Address"
                name="email" value={email} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth label="Phone Number" margin="normal"
                name="phone" value={phone} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>Address</Typography>
              <TextField
                variant="outlined" required fullWidth label="Street Name" margin="normal"
                name="streetName" value={streetName} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth label="City" margin="normal"
                name="city" value={city} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth label="State" margin="normal"
                name="state" value={state} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth label="Zip Code" margin="normal"
                name="zipCode" value={zipCode} onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>Identification</Typography>
              <TextField
                variant="outlined" required fullWidth label="Username" margin="normal"
                name="username" value={username} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth label="Drivers License Image" margin="normal"
                name="driversLicense" value={driversLicense} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth margin="normal"
                label="Password" type="password"
                name="password" value={password} onChange={handleInputChange}
              />
              <TextField
                variant="outlined" required fullWidth
                label="Password Again" type="password" margin="normal"
                name="password2" value={password2} onChange={handleInputChange}
              />
            </Grid>
          </Grid> */}
          {/* <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={submit}
          >
            {loading && <CircularProgress size={25} color="inherit" />}
            {!loading && 'Chef Signup'}
          </Button> */}
        </form>
        <Typography variant="body2">
          Already have a chef account? <Link className={linkButton} to="/chef/login">Login</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ChefSignup;

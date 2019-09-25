import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, Paper, Grid, Typography, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/user/brookelark)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
const ChefLogin = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
  }

  const { container, image, paper, avatar, form, submit, linkButton } = useStyles();
  const { email, password } = fields;
  return (
    <Grid container className={container}>
      <Grid item xs={false} sm={4} md={7} className={image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={paper}>
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faLock} />
          </Avatar>
          <Typography variant="h5">Chef Login</Typography>
          <form className={form} noValidate onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={handleInputChange}
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
              disabled={loading}
            >
              {loading && <CircularProgress size={25} color="inherit" />}
              {!loading && 'Chef Login'}
            </Button>
          </form>
          <Typography variant="body2">
            Don't have a chef account? <Link className={linkButton} to="/chef/signup">Signup</Link>.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default ChefLogin;

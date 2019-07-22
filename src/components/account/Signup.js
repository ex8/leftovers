import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Container, Typography, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
}));

const Signup = () => {
  const { paper, avatar, form, submit  } = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={paper}>
        <Avatar className={avatar}>
          <FontAwesomeIcon icon={faLock} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <form className={form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname" name="firstName" variant="outlined" required
                fullWidth id="firstName" label="First Name" autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined" required fullWidth id="lastName"
                label="Last Name" name="lastName" autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth id="email"
                label="Email Address" name="email" autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="password"
                label="Password" type="password" id="password" autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={submit}
          >
            Signup
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup;

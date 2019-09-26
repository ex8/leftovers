import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline, Container, Typography, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import BecomeAChefStepsForm from './steps/BecomeAChefStepsForm';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  linkButton: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const ChefSignup = () => {
  const { paper, avatar, linkButton } = useStyles();
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
        <BecomeAChefStepsForm />
        <Typography variant="body2">
          Already have a chef account? <Link className={linkButton} to="/chef/login">Login</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ChefSignup;

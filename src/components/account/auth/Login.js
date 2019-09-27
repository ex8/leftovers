import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, Typography, Container, CircularProgress, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { isEmail } from 'validator'
import jwtDecode from 'jwt-decode';

import Alert from '../../layout/Alert';
import api from '../../utils/api';
import setToken from '../../utils/setToken';
import { setCurrentUser } from '../../../redux/actions/user.actions';

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

const Login = ({ setCurrentUser, history }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const { email, password } = fields;

  const reset = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(false);
  };

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
    setLoading(true);
    if (validateForm()) {
      api.post('/api/account/login', fields)
        .then(res => {
          if (res.data.success) {
            const { token } = res.data;
            const decoded = jwtDecode(token);
            setToken(token);
            setCurrentUser(decoded, true);
            setSuccessMessage('Account successfully logged in.');
            setLoading(false);
            history.push('/account');
          }
          else {
            setLoading(false);
            setErrorMessage(res.data.message);
          }
        })
        .catch(() => {
          setErrorMessage('You cannot login at this time.');
          setLoading(false);
        });
    }
    setLoading(false);
  };

  const validateForm = () => {
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all fields.');
      return false;
    }
    else if (!isEmail(email)) {
      setErrorMessage('Please enter a valid e-mail address.');
      return false;
    }
    return true;
  }

  const { card, avatar, form, submit, linkButton } = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Card className={card}>
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
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

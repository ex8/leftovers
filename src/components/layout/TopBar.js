import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
  linkButton: {
    textDecoration: 'none',
    color: 'white',
  }
}));

const TopBar = ({ onMenuClick }) => {
  const { container, menuButton, flex, toolbarMargin, aboveDrawer, linkButton } = useStyles();
  return (
    <div className={container}>
      <AppBar className={aboveDrawer}>
        <Toolbar>
          <IconButton className={menuButton} color="inherit" onClick={onMenuClick}>
            <FontAwesomeIcon icon={faBars} size="xs" />
          </IconButton>
          <Typography variant="h6" color="inherit" className={flex}>
            <Link to="/" className={linkButton}>Leftovers</Link>
          </Typography>
          <Link to='/account/signup' className={linkButton}>
            <Button color='inherit'>Signup</Button>
          </Link>          
          <Link to='/account/login' className={linkButton}>
            <Button color='inherit'>Login</Button>
          </Link>         
        </Toolbar>
      </AppBar>
      <div className={toolbarMargin} />
    </div>
  );
}

export default TopBar;

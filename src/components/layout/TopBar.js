import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../cart/Cart';
import { logout } from '../../redux/actions/logout.actions';

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
  },
}));

const TopBar = ({ onMenuClick, isAuthenticated, logout, history }) => {
  const { container, menuButton, flex, toolbarMargin, aboveDrawer, linkButton } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(history);
    handleClose();
  };

  const authenticatedLinks = (
    <div>
      <IconButton
        onClick={handleMenu}
        color="inherit"
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );

  const guestLinks = (
    <div>
      <Link to='/account/signup' className={linkButton}>
        <Button color='inherit'>Signup</Button>
      </Link>
      <Link to='/account/login' className={linkButton}>
        <Button color='inherit'>Login</Button>
      </Link>
    </div>
  );

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
          {isAuthenticated ? authenticatedLinks : guestLinks}
          <Cart />
        </Toolbar>
      </AppBar>
      <div className={toolbarMargin} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));

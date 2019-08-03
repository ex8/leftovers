import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Collapse, Grid, Button, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faSearch, faTachometerAlt,
  faUtensils, faShoppingCart, faCogs,
  faCreditCard, faSignInAlt, faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 215,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 215,
  },
  listSubHeader: {
    padding: 0,
    minWidth: 0,
    color: 'inherit',
    '&hover': {
      background: 'inherit',
    },
  },
  linkButton: {
    textDecoration: 'none',
    color: '#383838',
  },
}));

const NavigationDrawer = ({ open, onClose, isAuthenticated }) => {
  const [sections, setSections] = useState({
    main: true,
    account: true,
  });
  const [items] = useState({
    main: [
      { label: 'Home', to: '/', Icon: <FontAwesomeIcon icon={faHome} size="lg" /> },
      { label: 'Search', to: '/search', Icon: <FontAwesomeIcon icon={faSearch} size="lg" /> },
    ],
    account: [
      { label: 'Dashboard', to: '/account', Icon: <FontAwesomeIcon icon={faTachometerAlt} size="lg" /> },
      { label: 'Dishes', to: '/account/dishes', Icon: <FontAwesomeIcon icon={faUtensils} size="lg" /> },
      { label: 'Orders', to: '/account/orders', Icon: <FontAwesomeIcon icon={faShoppingCart} size="lg" /> },
      { label: 'Gateways', to: '/account/gateways', Icon: <FontAwesomeIcon icon={faCreditCard} size="lg" /> },
      { label: 'Settings', to: '/account/settings', Icon: <FontAwesomeIcon icon={faCogs} size="lg" /> },
    ],
    guest: [
      { label: 'Login', to: '/account/login', Icon: <FontAwesomeIcon icon={faSignInAlt} size="lg" /> },
      { label: 'Signup', to: '/account/signup', Icon: <FontAwesomeIcon icon={faUserPlus} size="lg" /> },
    ],
  });

  const onClick = () => onClose();

  const toggleSection = name => () => {
    setSections(oldSections => ({
      ...oldSections,
      [name]: !sections[name]
    }));
  }

  const { listSubHeader, drawer, drawerPaper } = useStyles();
  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <Drawer 
            className={drawer} 
            open={open} 
            onClose={() => onClose()}
            classes={{
              paper: drawerPaper,
            }}
          >
            <List>
              <ListSubheader>
                <Button
                  disableRipple
                  classes={{ root: listSubHeader }}
                  onClick={toggleSection('main')}
                >
                  Leftovers
                </Button>
              </ListSubheader>
              <ListItems 
                items={items.main} 
                visible={sections.main} 
                onClick={onClick} 
              />
                <div>
                  <ListSubheader>
                    <Button
                      disableRipple
                      classes={{ root: listSubHeader }}
                      onClick={toggleSection('account')}
                    >
                      My Account
                    </Button>
                  </ListSubheader>
                  <ListItems 
                    items={isAuthenticated ? items.account : items.guest} 
                    visible={sections.account} 
                    onClick={onClick} 
                  />
                </div>
            </List>
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
};

const ListItems = ({ items, onClick, visible }) => {
  const { linkButton } = useStyles();
  return (
    <Collapse in={visible}>
      {items.map(({ label, to, Icon }, i) => (
        <Link key={i} className={linkButton} to={to}>
          <ListItem button onClick={onClick}>
            <ListItemIcon>
              {Icon}
            </ListItemIcon>
            <ListItemText>
              {label}
            </ListItemText>
          </ListItem>
        </Link>
      ))}
    </Collapse>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
});

export default connect(mapStateToProps)(NavigationDrawer);

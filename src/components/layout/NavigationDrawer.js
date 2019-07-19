import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer, Collapse, Grid, Button, List, ListItem,
  ListItemIcon, ListItemText, ListSubheader
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faSearch, faTachometerAlt,
  faUtensils, faShoppingCart, faCogs
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
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

const NavigationDrawer = ({ open, onClose }) => {
  const [sections, setSections] = useState({
    main: true,
    account: false,
  });
  const [items] = useState({
    main: [
      { label: 'Home', to: "/", Icon: <FontAwesomeIcon icon={faHome} size="lg" /> },
      { label: 'Search', to: "/search", Icon: <FontAwesomeIcon icon={faSearch} size="lg" /> },
    ],
    account: [
      { label: 'Dashboard', Icon: <FontAwesomeIcon icon={faTachometerAlt} size="lg" /> },
      { label: 'Dishes', Icon: <FontAwesomeIcon icon={faUtensils} size="lg" /> },
      { label: 'Orders', Icon: <FontAwesomeIcon icon={faShoppingCart} size="lg" /> },
      { label: 'Settings', Icon: <FontAwesomeIcon icon={faCogs} size="lg" /> },
    ],
  });

  const onClick = () => onClose();

  const toggleSection = name => () => {
    setSections({
      ...sections,
      [name]: !sections[name]
    });
  }

  const { listSubHeader } = useStyles();
  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <Drawer open={open} onClose={() => onClose()}>
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
              <ListItems items={items.main} visible={sections.main} onClick={onClick} />
              <ListSubheader>
                <Button
                  disableRipple
                  classes={{ root: listSubHeader }}
                  onClick={toggleSection('account')}
                >
                  My Account
                </Button>
              </ListSubheader>
              <ListItems items={items.account} visible={sections.account} onClick={onClick} />
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
          <Link className={linkButton} to={to}>
            <ListItem button key={i} onClick={onClick}>
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

export default NavigationDrawer;

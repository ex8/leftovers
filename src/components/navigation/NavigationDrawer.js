import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Collapse, Grid, Button, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faSearch, faQuestion, faTachometerAlt, 
  faUtensils, faShoppingCart, faCogs
} from '@fortawesome/free-solid-svg-icons';

const DrawerSections = ({ open, onClose }) => {
  const [sections, setSections] = useState({
    main: true,
    account: false,
  });
  const [items] = useState({
    main: [
      { label: 'Home', Icon: <FontAwesomeIcon icon={faHome} size="lg" /> },
      { label: 'Search', Icon: <FontAwesomeIcon icon={faSearch} size="lg" /> },
      { label: 'How it works', Icon: <FontAwesomeIcon icon={faQuestion} size="lg" /> },
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

const ListItems = ({ items, onClick, visible }) => (
  <Collapse in={visible}>
    {items
      .filter(({ hidden }) => !hidden)
      .map(({ label, disabled, Icon }, i) => (
        <ListItem button key={i} disabled={disabled} onClick={onClick}>
          <ListItemIcon>
            {Icon}
          </ListItemIcon>
          <ListItemText>
            {label}
          </ListItemText>
        </ListItem>
      ))}
  </Collapse>
)

const useStyles = makeStyles(theme => ({
  listSubHeader: {
    padding: 0,
    minWidth: 0,
    color: 'inherit',
    '&hover': {
      background: 'inherit',
    },
  },
}))

export default DrawerSections;

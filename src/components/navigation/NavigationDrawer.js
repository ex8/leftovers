import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const NavigationDrawer = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={() => onClose()}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={() => onClose()}>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;

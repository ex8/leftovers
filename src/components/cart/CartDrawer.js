import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, List, ListItem, Divider, ListItemText, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.down('xs')]: {
      width: 285,
    },
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  linkButton: {
    textDecoration: 'none',
    color: '#383838',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const CartDrawer = ({ open, onClose }) => {
  const { drawer, drawerPaper, rightIcon } = useStyles();
  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <Drawer
            anchor="right"
            className={drawer}
            open={open}
            onClose={() => onClose()}
            classes={{
              paper: drawerPaper,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Your cart
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <List>
              {[1, 2, 3, 4, 5].map((c, i) => (
                <div key={i}>
                  <ListItem button>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
            <Button variant="contained" color="secondary" fullWidth size="large">
              Checkout (5) items
            </Button>
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartDrawer;

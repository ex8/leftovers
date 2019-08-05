import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, List, ListItem, Divider, ListItemText, Typography, Button, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons';


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
  title: {
    // margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  iconPadding: {
    paddingRight: theme.spacing(1),
  },
  checkoutButton: {
    padding: theme.spacing(2),
  },
}));

const CartDrawer = ({ open, onClose }) => {
  const { drawer, drawerPaper, title, iconPadding, checkoutButton } = useStyles();
  return (
    <div>
      <Drawer
        anchor="right"
        className={drawer}
        open={open}
        onClose={() => onClose()}
        classes={{
          paper: drawerPaper,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography className={title} variant="h5">
              <FontAwesomeIcon className={iconPadding} icon={faShoppingBasket} size="lg" />
              Your Cart (5)
            </Typography>
          </Grid>
        </Grid>
        <List>
          {[1, 2, 3, 4, 5].map((c, i) => (
            <div key={i}>
              <ListItem>
                <Grid container>
                 <Grid item xs={2}>
                    <Typography>
                      1x
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      Paella Dish
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>
                      $4.99
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton>
                      <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Button className={checkoutButton} variant="contained" color="secondary" fullWidth size="large">
          Checkout 5 items ($22.95)
        </Button>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
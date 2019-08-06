import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import CartItems from './CartItems';

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
  const { drawer, drawerPaper, title, iconPadding, checkoutButton, linkButton } = useStyles();
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
        <CartItems />
        <Link className={linkButton} to="/checkout">
          <Button 
            className={checkoutButton}
            onClick={() => onClose()} 
            variant="contained" 
            color="secondary" 
            fullWidth 
            size="large"
          >
            Checkout 5 items ($22.95)
          </Button>
        </Link>
      </Drawer>
    </div>
  );
};

export default CartDrawer;

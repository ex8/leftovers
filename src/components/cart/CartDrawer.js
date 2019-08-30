import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Divider, Typography, Button, Avatar, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSadCry, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { teal } from '@material-ui/core/colors';

import CartItems from './CartItems';
import { getTotalQuantity, getTotalAmount } from '../utils/cart.helpers';
import { clear } from '../../redux/actions/cart.actions';

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
    color: 'inherit',
  },
  title: {
    padding: theme.spacing(3),
    color: 'inherit',
  },
  iconPadding: {
    paddingRight: theme.spacing(1),
  },
  checkoutButton: {
    padding: theme.spacing(2),
  },
  avatar: {
    [theme.breakpoints.down('xs')]: {
      left: '25%'
    },
    [theme.breakpoints.up('sm')]: {
      left: '40%',
    },
    margin: theme.spacing(2),
    backgroundColor: teal[400],
    width: 115,
    height: 115,
  },
  clearIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const CartDrawer = ({ open, onClose, items, clear }) => {
  const { drawer, drawerPaper, title, iconPadding, checkoutButton, linkButton, avatar, clearIcon } = useStyles();
  const totalQuantity = getTotalQuantity(items);
  const totalAmount = getTotalAmount(items);
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
          <Grid item>
            <Typography className={title} variant="h5">
              <FontAwesomeIcon className={iconPadding} icon={faShoppingBasket} size="lg" />
              Your Cart ({totalQuantity})
              <IconButton className={clearIcon} onClick={() => clear()}>
                <FontAwesomeIcon icon={faTrash} />
              </IconButton>
              {/* <Button onClick={() => clear()} variant="outlined">Clear</Button> */}
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography className={title}>
              <Button onClick={() => clear()} variant="outlined">Clear</Button>
            </Typography>
          </Grid> */}
        </Grid>
        <Divider />
        {totalQuantity === 0 && (
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faSadCry} size="4x" />
          </Avatar>
        )}
        <CartItems />
        <Link className={linkButton} to="/checkout" onClick={() => onClose()}>
          <Button
            disabled={Object.keys(items).length === 0}
            className={checkoutButton}
            onClick={() => onClose()}
            variant="contained" 
            color="secondary" 
            fullWidth 
            size="large"
          >
            Checkout {totalQuantity} item{totalQuantity !== 1 ? 's' : ''} (${totalAmount.toFixed(2)})
          </Button>
        </Link>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cartReducer.items,
});

const mapDispatchToProps = {
  clear,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Divider, Typography, Button, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { teal } from '@material-ui/core/colors';

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
    color: 'inherit',
  },
  title: {
    padding: theme.spacing(3),
  },
  iconPadding: {
    paddingRight: theme.spacing(1),
  },
  checkoutButton: {
    padding: theme.spacing(2),
  },
  avatar: {
    alignItems: 'center',
    margin: theme.spacing(2),
    backgroundColor: teal[400],
    width: 75,
    height: 75,
  },
}));

const CartDrawer = ({ open, onClose, count }) => {
  const { drawer, drawerPaper, title, iconPadding, checkoutButton, linkButton, avatar } = useStyles();
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
              Your Cart ({count})
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        {count === 0 && (
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faSadCry} size="2x" />
          </Avatar>
        )}
        <CartItems />
        <Link className={linkButton} to="/checkout">
          <Button 
            disabled={count === 0}
            className={checkoutButton}
            onClick={() => onClose()} 
            variant="contained" 
            color="secondary" 
            fullWidth 
            size="large"
          >
            Checkout {count} item{count < 1 ? 's' : ''} ($0.00)
          </Button>
        </Link>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.cartReducer.count,
});

export default connect(mapStateToProps)(CartDrawer);

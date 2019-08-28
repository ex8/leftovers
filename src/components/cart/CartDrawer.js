import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Divider, Typography, Button, Avatar, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSadCry, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
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
    flex: 1,
    padding: theme.spacing(3),
    display: 'inline-block',
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
}));

const CartDrawer = ({ open, onClose }) => {
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
              Your Cart (99)
            </Typography>
            <Typography display="inline">
              <IconButton onClick={() => onClose()}>
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        {/* {count === 0 && (
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faSadCry} size="4x" />
          </Avatar>
        )} */}
        <CartItems />
        <Link className={linkButton} to="/checkout">
          <Button 
            // disabled={count === 0}
            className={checkoutButton}
            onClick={() => onClose()} 
            variant="contained" 
            color="secondary" 
            fullWidth 
            size="large"
          >
            Checkout 99 items ($99.99)
            {/* Checkout {count} item{count !== 1 ? 's' : ''} (${total.toFixed(2)}) */}
          </Button>
        </Link>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CartDrawer);

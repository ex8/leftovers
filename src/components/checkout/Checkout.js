import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardHeader, CardContent, TextField, Divider, Button, CardActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShoppingCart, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItems from '../cart/CartItems';
import { getTotalQuantity, getTotalAmount } from '../utils/cart.helpers';
import EmptyItems from './EmptyItems';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(4),
  },
  card: {
    flex: 1,
    padding: theme.spacing(2),
  },
  iconMargin: {
    marginRight: theme.spacing(0.5),
  },
  divider: {
    margin: theme.spacing(3),
  },
  smallDivider: {
    margin: theme.spacing(1),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
  transparentCard: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }
}));

const TAX_PERCENTAGE = 0.03
const PROCESSING_FEE = 0.4;

const Checkout = ({ items, chef, place, isAuthenticated }) => {
  const { container, card, iconMargin, divider, title, smallDivider, linkButton, transparentCard } = useStyles();
  const totalQuantity = getTotalQuantity(items);
  const totalAmount = getTotalAmount(items);

  function calculateTax() {
    return totalAmount * TAX_PERCENTAGE;
  }

  function calculateTotalCost() {
    return totalAmount + calculateTax() + PROCESSING_FEE;
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
  }

  return (
    <div className={container}>
      {Object.keys(items).length === 0 && <EmptyItems />}
      {Object.keys(items).length > 0 && chef && (
        <Grid container spacing={2}>
          <Grid item xs={12}><Typography variant="h4">Checkout</Typography></Grid>
          <Grid item xs={12} sm={8}>
            {isAuthenticated ? '' : (
              <Card className={card}>
                <CardHeader
                  title="Login or Signup"
                  subheader="In order to complete your order, please sign in to your account."
                />
                <CardActions>
                  <Link className={linkButton} to="/account/signup">
                    <Button variant="contained" color="primary" size="large">Signup</Button>
                  </Link>
                  <Link className={linkButton} to="/account/login">
                    <Button variant="outlined" color="primary" size="large">Login</Button>
                  </Link>
                </CardActions>
              </Card>
            )}
            <Card className={transparentCard}>
              <CardHeader
                title="Pickup details"
                subheader="Information about your dish pickup."
              />
              <CardContent>
                <Typography>Pickup Address: N/A</Typography>
                <Typography>Pickup in: 30 minutes</Typography>
              </CardContent>
            </Card>
            <Card className={transparentCard}>
              <CardHeader
                title={`Items (${totalQuantity})`}
              />
              <CartItems />
              <TextField
                label="Order notes"
                margin="normal"
                variant="outlined"
                placeholder={`Leave note for chef (${chef.firstName} ${chef.lastName})`}
                fullWidth
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={card}>
              <CardHeader
                title="Order Summary"
              />
              <CardContent>
                <Typography className={title}>
                  <FontAwesomeIcon className={iconMargin} icon={faShoppingCart} />
                  {totalQuantity} item{totalQuantity !== 1 ? 's' : ''} from {`${chef.firstName} ${chef.lastName}`}
                </Typography>
                <Typography className={title}>
                  <FontAwesomeIcon className={iconMargin} icon={faClock} /> Pickup in 30 minutes
                </Typography>
                <Typography className={title}>
                  <FontAwesomeIcon className={iconMargin} icon={faMapMarkerAlt} />
                  {place ? place : 'Please specify an address to order.'}
                </Typography>

                <Divider className={divider} variant="middle" light />

                <Grid container spacing={3} justify="space-between" alignItems="center">
                  <Grid item><Typography variant="subtitle1">Subtotal</Typography></Grid>
                  <Grid item><Typography variant="subtitle1">${totalAmount.toFixed(2)}</Typography></Grid>
                </Grid>
                <Grid container spacing={3} justify="space-between" alignItems="center">
                  <Grid item><Typography variant="subtitle1">Tax</Typography></Grid>
                  <Grid item><Typography variant="subtitle1">${calculateTax().toFixed(2)}</Typography></Grid>
                </Grid>
                <Grid container spacing={3} justify="space-between" alignItems="center">
                  <Grid item><Typography variant="subtitle1">Processing Fee</Typography></Grid>
                  <Grid item><Typography variant="subtitle1">${PROCESSING_FEE.toFixed(2)}</Typography></Grid>
                </Grid>
                <Divider className={smallDivider} light />
                <Grid container spacing={5} justify="space-between" alignItems="center">
                  <Grid item><Typography variant="h6">Total</Typography></Grid>
                  <Grid item><Typography variant="h6">${calculateTotalCost().toFixed(2)}</Typography></Grid>
                </Grid>

                <Divider className={divider} variant="middle" light />

                <Button
                  disabled={place === '' || isAuthenticated === false}
                  onClick={handlePlaceOrder}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                >
                  Place Order (${calculateTotalCost().toFixed(2)})
              </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cartReducer.items,
  chef: state.cartReducer.chef,
  place: state.userReducer.location.place,
  isAuthenticated: state.userReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Checkout);

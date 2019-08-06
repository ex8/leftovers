import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';

import CartItems from '../cart/CartItems';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  card: {
    flex: 1,
  },
}));

const Checkout = () => {
  const { container, card } = useStyles();
  return (
    <div className={container}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <CartItems />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={card}>
            order summary...
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

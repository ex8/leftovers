import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardHeader, CardContent, List, ListItem } from '@material-ui/core';

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardHeader 
              title="Items (5)"
            />
            <CartItems />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={card}>
            <CardHeader 
              title="Order Summary"
            />
            <CardContent>
              <Typography>2 items from SOOD</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

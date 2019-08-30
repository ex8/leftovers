import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardHeader, CardContent, TextField, Divider, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import CartItems from '../cart/CartItems';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(4),
  },
  card: {
    flex: 1,
  },
  iconMargin: {
    marginRight: theme.spacing(0.5),
  },
  divider: {
    margin: theme.spacing(3),
  },
}));

const Checkout = () => {
  const { container, card, iconMargin, divider } = useStyles();
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <CardHeader
            title="Items (5)"
          />
          <CartItems />
          <TextField
            label="Order notes"
            margin="normal"
            variant="outlined"
            placeholder="Leave a note for chef"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={card}>
            <CardHeader
              title="Order Summary"
            />
            <CardContent>
              <Typography>
                <FontAwesomeIcon className={iconMargin} icon={faMapMarkerAlt} /> 388 Beale St
              </Typography>
              <Divider className={divider} variant="middle" light />
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                Place Order ($22.95)
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

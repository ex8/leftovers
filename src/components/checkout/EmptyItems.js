import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const EmptyItems = () => {
  const { linkButton } = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}
      >
        <Grid item xs={12}>
          <FontAwesomeIcon icon={faShoppingCart} size="4x" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">No items in your cart.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>You're not picky, I'm picky.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link className={linkButton} to="/search">
            <Button variant="contained" color="secondary" size="large">
              Find Dishes
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmptyItems;

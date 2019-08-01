import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Featured = () => {
  const { container } = useStyles();
  const cards = [1, 2, 3];
  return (
    <div>
      <Container className={container}>
        <Grid container>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Popular Dishes in San Francisco
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Dish />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;

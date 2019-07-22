import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Featured = () => {
  const { cardGrid } = useStyles();
  const cards = [1, 2, 3];
  return (
    <div>
      <Container className={cardGrid} maxWidth="md">
        <Grid container>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Popular Dishes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
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

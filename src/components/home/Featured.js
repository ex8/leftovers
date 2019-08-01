import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Featured = ({ title, cards }) => {
  const { container } = useStyles();
  return (
    <div>
      <Container className={container}>
        <Grid container>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {title}
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

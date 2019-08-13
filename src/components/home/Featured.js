import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

const Featured = ({ title, cards }) => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Grid container>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={4}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Dish />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Featured;

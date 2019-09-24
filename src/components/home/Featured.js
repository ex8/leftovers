import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';

import Dish from '../search/Dish';
import api from '../../redux/api';
import DishSkeleton from '../search/DishSkeleton';
import NoResults from '../layout/NoResults';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    marginBottom: theme.spacing(4),
  },
}));

const Featured = ({ title, type }) => {
  const { container} = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/api/search/${type}`)
      .then(res => {
        if (res.data.success) {
          setDishes(res.data.dishes);
          setLoading(false);
        }
      })
      .catch(() => setDishes([]));
  }, []);

  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {loading && <DishSkeleton skeletons={3} />}
            {!loading && dishes.length === 0 && <NoResults text="We could not find any dishes." />}
            {!loading && dishes.map((dish, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Dish dish={dish} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;

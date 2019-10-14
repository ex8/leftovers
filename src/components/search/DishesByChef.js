import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

import api from '../utils/api';
import DishSkeleton from './DishSkeleton';
import Dish from './Dish';
import NoResults from '../layout/NoResults';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: teal[400],
    width: 75,
    height: 75,
  },
}));

const DishesByChef = ({ dishId, chefId, location }) => {
  const { container, card, avatar } = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/api/search/chef/${chefId}`)
      .then(res => {
        if (res.data.success) {
          const filtered = res.data.dishes.filter(dish => dish._id !== dishId);
          setDishes(filtered);
          setLoading(false);
        }
      })
      .catch(err => setDishes([]));
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <div className={container}>
      <Grid container spacing={2}>
        {loading && <DishSkeleton skeletons={3} />}
        {!loading && dishes.length === 0 && <NoResults text="We could not find any dishes." />}
        {!loading && dishes.map((dish, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Dish dish={dish} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default DishesByChef;

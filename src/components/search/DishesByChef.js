import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

import api from '../../redux/api';
import DishSkeleton from './DishSkeleton';
import Dish from './Dish';

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

const DishesByChef = ({ chefId }) => {
  const { container, card, avatar } = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    api.get('/api/search')
      .then(res => {
        if (res.data.success) {
          setDishes(res.data.dishes);
          setLoading(false);
        }
      })
      .catch(err => setDishes([]));
  }, []);

  return (
    <div className={container}>
      <Grid container spacing={2}>
        {loading && <DishSkeleton skeletons={3} />}
        {!loading && dishes.length === 0 && (
          <Card className={card}>
            <Avatar className={avatar}>
              <FontAwesomeIcon icon={faSadCry} size="2x" />
            </Avatar>
            <Typography variant="h6">
              We could not find any featured dishes.
            </Typography>
          </Card>
        )}
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

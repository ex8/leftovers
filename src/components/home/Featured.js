import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Card, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

import Dish from '../search/Dish';
import api from '../../redux/api';
import DishSkeleton from '../search/DishSkeleton';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    marginBottom: theme.spacing(4),
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

const Featured = ({ title, type }) => {
  const { container, card, avatar } = useStyles();
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
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </Grid>
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
        </Grid>
      </Container>
    </div>
  );
}

export default Featured;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Card, Avatar, CircularProgress } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import Skeleton from '@material-ui/lab/Skeleton';

import Dish from './Dish';
import Footer from '../layout/Footer';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar';
import AddressBar from '../home/AddressBar';
import api from '../../redux/api';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(4),
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

const DishList = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryString, setQueryString] = useState('');
  const { container, card, avatar } = useStyles();

  useEffect(() => {
    api.get('/api/search')
      .then(res => {
        if (res.data.success) {
          setDishes(res.data.dishes);
          setLoading(false);
        }
      })
      .catch(err => setDishes([]))
  }, []);

  const handleSearchSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    // TWO OPTIONS TO FILTER DISHES HERE;
    // (1) filter dishes ARRAY by queryString
    // OR
    // (2) send NEW request to backend (ex. /api/search/s={queryString})
  };

  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <SearchBar 
              queryString={queryString}
              setQueryString={setQueryString}
              handleSubmit={handleSearchSubmit}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AddressBar />
          </Grid>
          <Grid item xs={12}>
            <SearchFilters />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              {queryString}
          </Typography>
            <Typography variant="caption">
              {dishes.length} dishes
          </Typography>
          </Grid>
          {/* {loading && <CircularProgress color="primary" size={50} />} */}
          {loading && <Skeleton variant="rect" width={210} height={118} />}
          {!loading && dishes.length === 0 && (
            <Card className={card}>
              <Avatar className={avatar}>
                <FontAwesomeIcon icon={faSadCry} size="2x" />
              </Avatar>
              <Typography variant="h6">
                No dishes around.
              </Typography>
            </Card>
          )}
          {!loading && dishes.map((d, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Dish 
                title={d.title} 
                description={d.description}
                price={d.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default DishList;

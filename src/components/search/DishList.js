import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Card, Avatar } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import Dish from './Dish';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar';
import AddressBar from '../home/AddressBar';
import api from '../../redux/api';
import DishSkeleton from './DishSkeleton';

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
    backgroundColor: teal[200],
    width: 75,
    height: 75,
  },
}));

const DishList = ({ place, coords }) => {
  const { container, card, avatar } = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    if (place !== '') {
      getDishes();
    }
    else {
      setLoading(false);
    }
  }, []);


  const getDishes = () => {
    setLoading(true);
    const q = `/api/search?s=${queryString ? queryString : ''}&p=${place ? place : ''}`;
    api.get(q)
      .then(res => {
        if (res.data.success) {
          setDishes(res.data.dishes);
          setLoading(false);
        }
      })
      .catch(err => setDishes([]))
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setLoading(true);
    getDishes();
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <SearchBar
              queryString={queryString}
              setQueryString={setQueryString}
              handleSubmit={handleSearchSubmit}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <AddressBar getDishes={getDishes} redirect={false} />
          </Grid>
          <Grid item xs={12}>
            <SearchFilters />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">{queryString}</Typography>
            <Typography variant="caption">{dishes.length} dishes found</Typography>
          </Grid>
          {!place && (
            <Grid item xs={12}>
              <Card className={card}>
                <Avatar className={avatar}>
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
                </Avatar>
                <Typography variant="subtitle2">
                  Enter an address for dishes in your area.
                </Typography>
              </Card>
            </Grid>
          )}
          {loading && <DishSkeleton skeletons={6} />}
          {!loading && dishes.length === 0 && place !== '' && (
            <Card className={card}>
              <Avatar className={avatar}>
                <FontAwesomeIcon icon={faSadCry} size="2x" />
              </Avatar>
              <Typography variant="h6">
                No dishes found.
              </Typography>
            </Card>
          )}
          {!loading && dishes.map((d, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Dish dish={d} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  place: state.userReducer.location.place,
  coords: state.userReducer.location.coords,
});

export default connect(mapStateToProps)(DishList);

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardHeader, Avatar, Typography, Button } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { addItem } from '../../redux/actions/cart.actions';
import api from '../../redux/api';
import DishDetailSkeleton from './DishDetailSkeleton';
import AddressBar from '../home/AddressBar';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  card: {
    flex: 1,
    padding: theme.spacing(2),
  },
  flex: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '50.25%',
  },
  avatar: {
    backgroundColor: teal[500],
  },
}))

const DishDetail = ({ match, addItem, place }) => {
  const { container, card, media, avatar, flex } = useStyles();
  const [dish, setDish] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/api/search/${match.params.id}`)
      .then(res => {
        if (res.data.success) {
          setDish(res.data.dish);
          setLoading(false);
        }
      })
      .catch(err => setDish({}))
  }, []);

  function addToCart() {
    addItem(dish);
  };

  return (
    <div className={container}>
      {loading && <DishDetailSkeleton />}
      {!loading && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={flex} variant="h4">
              {dish.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card className={card}>
              <CardMedia
                className={media}
                image="https://source.unsplash.com/random"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={card}>
              <Typography paragraph>
                A delicious seafood paella dish made with a secret!
            </Typography>
              <Typography paragraph>
                Stock: 4
            </Typography>
              <Typography paragraph>
                Price: $4.99
            </Typography>
              <Typography paragraph>
                Tags: Chicken, Seafood, Clams, Shrimp
            </Typography>
            <Button
              disabled={place === ''}
              fullWidth
              variant="contained"
              color="secondary"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
            </Card>
            {place === '' && <AddressBar redirect={false} />}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card className={card}>
              <CardHeader
                avatar={
                  <Avatar className={avatar}>M</Avatar>
                }
                title="Matt Massoodi"
                subheader={<FontAwesomeIcon icon={faStar} size="sm" />}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">More dishes by Matt Massoodi</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  )
};

const mapStateToProps = state => ({
  place: state.userReducer.location.place,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);

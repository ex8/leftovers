import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardHeader, Avatar, Typography, Button, Chip } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { addItem } from '../../redux/actions/cart.actions';
import api from '../../redux/api';
import DishDetailSkeleton from './DishDetailSkeleton';
import AddressBar from '../home/AddressBar';
import DishesByChef from './DishesByChef';

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
  cardCry: {
    flex: 1,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarCry: {
    margin: theme.spacing(2),
    backgroundColor: teal[200],
    width: 75,
    height: 75,
  },
  flex: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '50.25%',
  },
  avatar: {
    backgroundColor: teal[400],
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
  chip: {
    margin: theme.spacing(0.5, 0.5),
  },
}))

const DishDetail = ({ match, addItem, place, location }) => {
  const { container, card, media, avatar, flex, cardCry, avatarCry, linkButton, chip } = useStyles();
  const [dish, setDish] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/api/search/${match.params.id}`)
      .then(res => {
        if (res.data.success) {
          setDish(res.data.dish);
          setLoading(false);
        }
        else {
          setError(res.data.err.message);
          setLoading(false);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [location.key]);

  function addToCart() {
    addItem(dish);
  };

  return (
    <div className={container}>
      {loading && !error && <DishDetailSkeleton />}
      {!loading && error && (
        <Card className={cardCry}>
          <Avatar className={avatarCry}>
            <FontAwesomeIcon icon={faSadCry} size="2x" />
          </Avatar>
          <Link className={linkButton} to="/search">
            <Button variant="contained" color="secondary" size="large">
              Find Dishes
            </Button>
          </Link>
        </Card>
      )}
      {!loading && !error && (
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
              <Typography variant="h6">Stock</Typography>
              <Typography>{dish.stock}</Typography>

              <Typography variant="h6">Price</Typography>
              <Typography paragraph>${dish.price.toFixed(2)}</Typography>
              <Button
                  disabled={dish.stock === 0 || place === ''}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={addToCart}
                  size="large"
                >
                  Add to Cart
                </Button>
              </Card>
              {place === '' && <AddressBar redirect={false} />}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={card}>
              <CardHeader
                avatar={
                  <Avatar className={avatar}>{dish.chef.firstName.split('')[0]}</Avatar>
                }
                title={`${dish.chef.firstName} ${dish.chef.lastName}`}
                subheader={<FontAwesomeIcon icon={faStar} size="sm" />}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card className={card}>
              <Typography variant="h6">Description</Typography>
              <Typography paragraph>{dish.description}</Typography>

              <Typography variant="h6">Tags</Typography>
              <Typography paragraph>
                {dish.tags.map((tag, i) => (
                  <span key={i}>
                    {tag}, {' '}
                  </span>
                ))}
              </Typography>

              <Typography variant="h6">Ingredients</Typography>
              {dish.ingredients.map((ingredient, i) => (
                <Chip key={i} className={chip} label={ingredient} />
              ))}
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">More dishes by {`${dish.chef.firstName} ${dish.chef.lastName}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <DishesByChef dishId={dish._id} chefId={dish.chef._id} location={location} />
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

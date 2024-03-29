import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Paper, Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../layout/Carousel';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chip: {
    margin: theme.spacing(0.5, 0.5),
  },
  label: {
    backgroundColor: '#F5F5F5',
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Dish = ({ dish }) => {
  const { card, expand, expandOpen, label, linkButton, chip } = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  };

  const { images, title, description, price, rating, tags, ingredients, chef } = dish;
  const profileUrl = `/profile/${chef.username}`;
  return (
    <div>
      <Card className={card}>
        <Carousel images={images} />
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                By <Link className={linkButton} to={profileUrl}>{chef.firstName} {chef.lastName}</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" gutterBottom>
                {tags.map((tag, i) => (
                  <span key={i}>
                    {tag}, {' '}
                  </span>
                ))}
              </Typography>
            </Grid>
            <Grid item>
              <Paper className={label} square elevation={0}>
                <FontAwesomeIcon icon={faDollarSign} /> {parseFloat(price).toFixed(2)}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={label} square elevation={0}>
                <Rating size="small" value={rating} readOnly />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={label} square elevation={0}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {chef.city}, {chef.state}
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {dish._id && (
            <Link to={`/search/${dish._id}`} className={linkButton}>
              <Button size="small" variant="outlined" color="primary">
                View dish
              </Button>
            </Link>
          )}
          
          <IconButton
            className={clsx(expand, {
              [expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body2" paragraph>
              {description}
            </Typography>
            <Typography variant="h6">Ingredients</Typography>
            {ingredients.map((ingredient, i) => (
              <Chip key={i} className={chip} label={ingredient} />
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Dish;

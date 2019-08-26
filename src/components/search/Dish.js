import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Paper, Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
  const { card, media, expand, expandOpen, label, linkButton, chip } = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  };

  function addToCart() {
    console.log('add to cart...');
  };

  const { title, description, price, rating, tags, ingredients, chef } = dish;
  const profileUrl = `/profile/${chef.username}`;
  return (
    <Card className={card}>
      <CardMedia
        className={media}
        image="https://source.unsplash.com/random"
        title={title}
      />
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
              <FontAwesomeIcon icon={faDollarSign} /> {price.toFixed(2)}
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
        <Link to='/search/a1' className={linkButton}>
          <Button size="small" variant="outlined" color="primary">
            View dish
          </Button>
        </Link>
        <Button onClick={addToCart} size="small" variant="contained" color="primary">
          Add to cart
        </Button>
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
  );
}

export default Dish;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Paper, Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDollarSign, faStar, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
    color: 'white',
  },
}));

const Dish = () => {
  const { card, media, expand, expandOpen, label, linkButton, chip } = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={card}>
      <CardMedia
        className={media}
        image="https://source.unsplash.com/random"
        title="Paella dish"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Paella Dish</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">By Mary Jane</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" gutterBottom>
              Chicken, Seafood, Clams, Shrimp
            </Typography>
          </Grid>
          <Grid item>
            <Paper className={label} square elevation={0}>
              <FontAwesomeIcon icon={faDollarSign} size="sm" /> 4.99
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={label} square elevation={0}>
              <FontAwesomeIcon icon={faStar} size="sm" /> 4.3 (159)
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={label} square elevation={0}>
              <FontAwesomeIcon icon={faBolt} size="sm" /> Quick
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
        <Button size="small" variant="contained" color="primary">
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
            A delicious seafood paella dish made with a secret!
          </Typography>
          <Typography variant="h6">Ingredients</Typography>
          <Chip className={chip} label="Onions" />
          <Chip className={chip} label="Garlic" />
          <Chip className={chip} label="Ginger" />
          <Chip className={chip} label="Saffron" />
          <Chip className={chip} label="Sauce" />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Dish;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia } from '@material-ui/core';

import Dish from './Dish';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  card: {
    flex: 1,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))

const DishDetail = ({ match }) => {
  const { container, card, media } = useStyles();
  return (
    <div className={container}>
      <Grid container>
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
            chef deets
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card className={card}>
            dish deets
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default DishDetail;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardHeader, Avatar, Typography } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: teal[500],
  },
}))

const DishDetail = ({ match }) => {
  const { container, card, media, avatar } = useStyles();
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">
            Paella Dish
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
            <CardHeader
              avatar={
                <Avatar className={avatar}>M</Avatar>
              }
              title="Matt Massoodi"
              subheader={<FontAwesomeIcon icon={faStar} size="sm" />}
            />
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

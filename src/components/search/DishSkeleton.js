import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const DishSkeleton = ({ skeletons }) => {
  const { card, media } = useStyles();
  return (
    <Grid container spacing={2}>
      {[...Array(skeletons)].map((s, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Card className={card}>
            <Skeleton variant="rect" className={media} />
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Skeleton height={15} width="50%" />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton height={15} width="85%" />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton height={35} width="65%" />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Skeleton height={30} />
                </Grid>
                <Grid item xs={4}>
                  <Skeleton height={30} />
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DishSkeleton;

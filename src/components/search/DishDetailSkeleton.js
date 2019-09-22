import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const DishDetailSkeleton = () => {
  const { card, media } = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Card className={card}>
          <Skeleton className={media} variant="rect" />
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={card}>
          <Skeleton height={15} width="80%" />
          <Skeleton height={15} width="30%" />
          <Skeleton height={15} width="40%" />
          <Skeleton height={15} width="60%" />
          <Skeleton height={35} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Card className={card}>
          <CardHeader
            avatar={
              <Skeleton variant="circle" width={40} height={40} />
            }
            title={<Skeleton height={15} width="80%" />}
            subheader={<Skeleton height={15} width="40%" />}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DishDetailSkeleton;

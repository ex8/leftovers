import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    width: 200,
    height: 200,
  },
}))

const Dashboard = () => {
  const { card } = useStyles();
  return (
    <div>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={card}>
            a card
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={card}>
            a card
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={card}>
            a card
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={card}>
            a card
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

export default Dashboard;

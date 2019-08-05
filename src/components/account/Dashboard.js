import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2)
  },
  card: {
    flex: 1,
    padding: theme.spacing(2)
  },
}))

const Dashboard = ({ user }) => {
  const { container, card } = useStyles();
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className={card}>
            Hi, {user.firstName}!
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={card}>
            <Typography paragraph>Username: {user.username}</Typography>
            <Typography paragraph>Address: {user.address}</Typography>
            <Typography paragraph>Email: {user.email}</Typography>
            <Typography paragraph>Phone: {user.phone}</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps)(Dashboard);

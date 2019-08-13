import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(4)
  },
  container: {
    flexGrow: 1,
    margin: theme.spacing(4)
  },
  linkButton: {
    textDecoration: 'none',
  }
}))

const Dashboard = ({ user }) => {
  const { card, container, linkButton } = useStyles();
  const user1 = {
    firstName: 'drew',
    username: 'drew',
    address: '1079 natoma street, sf, ca 94103',
    email: 'drew@drew.com',
    phone: '6502696088'
  }

  return (
    <div className={container}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Hi, {user1.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12} spacing={4}>
            <Card className={card}>
              <Typography paragraph>Username: {user1.username}</Typography>
              <Typography paragraph>Address: {user1.address}</Typography>
              <Typography paragraph>Email: {user1.email}</Typography>
              <Typography paragraph>Phone: {user1.phone}</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Orders</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Payment</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Settings</Typography>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps)(Dashboard);

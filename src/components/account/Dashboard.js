import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(6)
  },
  container: {
    flexGrow: 1,
    margin: theme.spacing(4)
  },
  linkButton: {
    textDecoration: 'none',
  },
  media: {
    borderRadius: '5px',
    height: '90%',
    flex: 1,
    marginBottom: '5%',
    marginTop: '5%',
    paddingTop: '50.25%'
  }
}))

const Dashboard = () => {
  const { card, container, linkButton, media } = useStyles();
  const user1 = {
    firstName: 'drew',
    username: 'drew',
    address: '1079 natoma street, sf, ca 94103',
    email: 'drew@drew.com',
    phone: '6502696088'
  }

  return (
    <div className={container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Hi, {user1.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <CardMedia
              className={media}
              image="https://source.unsplash.com/random"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={card}>
              <Typography paragraph>Username: {user1.username}</Typography>
              <Typography paragraph>Address: {user1.address}</Typography>
              <Typography paragraph>Email: {user1.email}</Typography>
              <Typography paragraph>Phone: {user1.phone}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Orders</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/account" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Payment</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/account/settings" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Settings</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/account/dishes" className={linkButton}>
              <Card className={card}>
                <Typography variant="h5">Dishes</Typography>
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

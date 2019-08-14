import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
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
  fillCard: {
    flex: 1,
  },
  linkButton: {
    textDecoration: 'none',
  },
  media: {
    height: '100%',
    borderRadius: '5px'
  },
  mediaContainer: {
    flex: 1,
    height: '100%',
    padding: theme.spacing(2)
  }
}))

const Dashboard = ({ user }) => {
  const { card, container, fillCard, linkButton, media, mediaContainer } = useStyles();
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
          <Grid item xs={4} md={2} className={fillCard}>
            <CardMedia
              className={media}
              image="https://source.unsplash.com/random"
            />
          </Grid>
          <Grid item xs={8} md={6}>
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

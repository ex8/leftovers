import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Typography, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(4),
  },
  container: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Dashboard = ({ user }) => {
  const { card, container, linkButton } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Hi, {user.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/dishes" className={linkButton}>
              <Card className={card}>
                <Avatar><FontAwesomeIcon icon={faUtensils} /></Avatar>
                <Typography variant="h5">Dishes</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account/orders" className={linkButton}>
              <Card className={card}>
                <Avatar><FontAwesomeIcon icon={faShoppingCart} /></Avatar>
                <Typography variant="h5">Orders</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/account" className={linkButton}>
              <Card className={card}>
                <Avatar><FontAwesomeIcon icon={faCreditCard} /></Avatar>
                <Typography variant="h5">Payment</Typography>
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

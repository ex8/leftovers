import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button, Card, Avatar, CardContent, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faBitcoin, faAmazonPay, faApplePay } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    flex: 1,
    padding: theme.spacing(4),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: theme.spacing(2),
    width: 60,
    height: 60,
  },
}));

const Gateways = () => {
  const { container, linkButton, card, content, avatar, } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4" gutterBottom>Payment Gateways</Typography>
              </Grid>
              <Grid item>
                <Link className={linkButton} to="/account/payments/add">
                  <Button variant="outlined" color="primary" size="large">Add New Payment Method</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={card}>
              <CardContent className={content}>
                <Avatar className={avatar} style={{ backgroundColor: '#003087' }}>
                  <FontAwesomeIcon icon={faPaypal} size="lg" />
                </Avatar>
                <Typography variant="h5">Paypal</Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="space-around">
                  <Grid item>
                    <Button color="primary">Manage</Button>
                  </Grid>
                  <Grid item>
                    <Button>Disable</Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={card}>
              <CardContent className={content}>
                <Avatar className={avatar} style={{ backgroundColor: '#FF9900' }}>
                  <FontAwesomeIcon icon={faBitcoin} size="lg" />
                </Avatar>
                <Typography variant="h5">Bitcoin</Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="space-around">
                  <Grid item>
                    <Button color="primary">Manage</Button>
                  </Grid>
                  <Grid item>
                    <Button>Disable</Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={card}>
              <CardContent className={content}>
                <Avatar className={avatar}>
                  <FontAwesomeIcon icon={faAmazonPay} size="lg" />
                </Avatar>
                <Typography variant="h5">Amazon Pay</Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="space-around">
                  <Grid item>
                    <Button color="primary">Manage</Button>
                  </Grid>
                  <Grid item>
                    <Button color="secondary">Enable</Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={card}>
              <CardContent className={content}>
                <Avatar className={avatar}>
                  <FontAwesomeIcon icon={faApplePay} size="lg" />
                </Avatar>
                <Typography variant="h5">Apple Pay</Typography>
              </CardContent>
              <CardActions>
                <Grid container justify="space-around">
                  <Grid item>
                    <Button color="primary">Manage</Button>
                  </Grid>
                  <Grid item>
                    <Button color="secondary">Enable</Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

export default Gateways;

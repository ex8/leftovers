import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import { connect } from 'react-redux';

function createData(id, date, chef, dish, paymentMethod, amount) {
  return { id, date, chef, dish, paymentMethod, amount };
}

const data = createData(0, '16 Mar, 2019', 'Elvis Presley', 'Cheddar', 'VISA ⠀•••• 3719', 312.44)

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3)
  },
  container: {
    margin: theme.spacing(4)
  },
  media: {
    borderRadius: '5px',
    minHeight: '250px'
  },
  orderTextDetails: {
    marginTop: theme.spacing(2)
  }
}))

const OrderDetails = (props) => {
  const { card, container, media } = useStyles();

  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              {data.date}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card className={card}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    className={media}
                    image="https://source.unsplash.com/random"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography component="h2" variant="h6" display="block" align="left" gutterBottom>
                        {data.dish}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="h2" variant="h6" display="block" align="right" gutterBottom>
                        {data.chef}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="body1" variant="body1" display="block" gutterBottom>
                        {data.paymentMethod}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="body1" variant="body1" display="block" align="right" gutterBottom>
                        {data.amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps)(OrderDetails);

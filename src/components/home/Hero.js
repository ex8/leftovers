import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import AddressBar from './AddressBar';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Leftovers
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Order hand-crafted, home cooked meals!
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <AddressBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;

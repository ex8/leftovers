import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const { heroContent, heroButtons } = useStyles();
  return (
    <div className={heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Leftovers
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Order hand-crafted, home cooked meals!
        </Typography>
        <div className={heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

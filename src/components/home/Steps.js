import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  stepContent: {
    backgroundColor: '#3f51b5',
    padding: theme.spacing(8, 0, 6),
    color: 'white',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Steps = () => {
  const { stepContent, heroButtons } = useStyles();
  return (
    <div className={stepContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          How it works
        </Typography>
        <div className={heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              1
            </Grid>
            <Grid item>
              2
            </Grid>
            <Grid item>
              3
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Steps;

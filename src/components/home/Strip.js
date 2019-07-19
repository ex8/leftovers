import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  stepContent: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(8, 0, 6),
    color: 'white',
  },
}));

const Strip = () => {
  const { stepContent } = useStyles();
  return (
    <div className={stepContent}>
      <Container maxWidth="sm">
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={6} md={3}>
            one
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            two
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            three
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Strip;

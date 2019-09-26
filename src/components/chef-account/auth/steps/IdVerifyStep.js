import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

const IdVerifyStep = ({ fields, setFields }) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="space-around">
          <Grid item xs={12}>
            <Typography gutterBottom>
              Your drivers license photo will be used to verify your identity.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IdVerifyStep;

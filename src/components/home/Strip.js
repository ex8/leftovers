import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(8, 0, 6),
    color: 'white',
  },
}));

const Strip = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2} justify="space-around" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <FontAwesomeIcon icon={faUtensils} size="5x" />
            <Typography variant="h4">
              Home chef?
            </Typography>
            <Typography>
              Add your dish
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4">
              Fan of eating?
            </Typography>
            <Typography>
              Browser dishes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            hi
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Strip;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Card, Avatar, CardActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.secondary.main,
    height: 100,
    padding: theme.spacing(4),
  },
}));

const Strip = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Grid container justify="center">
        <Grid item xs={12}>
          bruh
        </Grid>
      </Grid>
    </div>
  );
}

export default Strip;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.secondary.main,
    height: 200,
    padding: theme.spacing(4),
  },
}));

const Strip = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Grid container justify="center">
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Strip;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const Profile = ({ match }) => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          user info...
        </Grid>
        <Grid item xs={12} sm={4}>
          rating...
        </Grid>
        <Grid item xs={12}>
          user dishes...
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

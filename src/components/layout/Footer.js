import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Navigation = () => {
  const { footer } = useStyles();
  return (
    <footer className={footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Leftovers
    </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        
    </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Made with love
      </Typography>
    </footer>
  )
};

export default Navigation;

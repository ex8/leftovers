import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  linkButton: {
    textDecoration: 'none',
    color: '#383838',
  },
}));

const Navigation = () => {
  const { container, linkButton } = useStyles();
  return (
    <footer className={container}>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5">
            Leftovers
          </Typography>
          <Typography gutterBottom>
            Made with {<FontAwesomeIcon icon={faHeart} size="xs" />}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">
            Main
          </Typography>
          <List>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faHome} />
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faHome} />
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faHome} />
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">
            Account
          </Typography>
          <List>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </ListItemIcon>
                <ListItemText>
                  Dashboard
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </ListItemIcon>
                <ListItemText>
                  Dashboard
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </ListItemIcon>
                <ListItemText>
                  Dashboard
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Grid>
      </Grid>
    </footer>
  )
};

export default Navigation;

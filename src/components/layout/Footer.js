import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faHeart, faSearch, faSignInAlt, faUserPlus, faUtensils, faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Navigation = () => {
  const { container, linkButton } = useStyles();
  return (
    <footer className={container}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5">Leftovers</Typography>
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
            <Link className={linkButton} to="/search">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </ListItemIcon>
                <ListItemText>
                  Search
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/account/login">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </ListItemIcon>
                <ListItemText>
                  Login
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/account/signup">
              <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faUserPlus} />
                </ListItemIcon>
                <ListItemText>
                  Signup
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">
            My Account
          </Typography>
          <List>
            <Link className={linkButton} to="/account">
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
                  <FontAwesomeIcon icon={faUtensils} />
                </ListItemIcon>
                <ListItemText>
                  Dishes
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </ListItemIcon>
                <ListItemText>
                  Orders
                </ListItemText>
              </ListItem>
            </Link>
            <Link className={linkButton} to="/">
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCreditCard} />
                </ListItemIcon>
                <ListItemText>
                  Gateways
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, Button, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 60,
    height: 60,
  },
  card: {
    width: 350,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 100,
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  }
}));

const NotAChefUser = () => {
  const { container, card, avatar, linkButton } = useStyles();
  return (
    <Container className={container}>
      <Grid container justify="center">
        <Grid item>
          <Card className={card}>
            <Avatar className={avatar}>
              <FontAwesomeIcon icon={faEyeSlash} size="lg" />
            </Avatar>
            <Typography variant="h6">Oops!</Typography>
            <Typography variant="subtitle1">Only chefs can view this page.</Typography>
            <Typography gutterBottom variant="caption">Apply to be one today.</Typography>
            <Link className={linkButton} to="/account/become-a-chef">
              <Button variant="outlined" color="primary">
                Become a Chef
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotAChefUser;

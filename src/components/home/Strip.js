import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Button, Card, Avatar, CardActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(5, 5),
  },
  avatar: {
    backgroundColor: green[300],
    margin: theme.spacing(1),
  },
  icon: {
    margin: theme.spacing(1),
  },
}));

const Strip = () => {
  const { container, card, avatar, icon } = useStyles();
  return (
    <Container className={container}>
      <Typography variant="h4">
        How it works
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Card className={card}>
            <Avatar className={avatar}>1</Avatar>
            <FontAwesomeIcon className={icon} icon={faUtensils} size="3x" />
            <Typography variant="subtitle1" align="center">
              Home-chef cooks dish
            </Typography>
            <CardActions>
              <Button size="small" variant="outlined" color="secondary">
                Search chefs
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={card}>
            <Avatar className={avatar}>2</Avatar>
            <FontAwesomeIcon className={icon} icon={faUtensils} size="3x" />
            <Typography variant="subtitle1" align="center">
              Hungry consumer searches dishes
            </Typography>
            <CardActions>
              <Button size="small" variant="outlined" color="secondary">
                Search dishes
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={card}>
            <Avatar className={avatar}>3</Avatar>
            <FontAwesomeIcon className={icon} icon={faHeart} size="3x" />
            <Typography variant="subtitle1" align="center">
              Chef and consumer both are happy
            </Typography>
            <CardActions>
              <Button size="small" variant="outlined" color="secondary">
                Search dishes
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Strip;

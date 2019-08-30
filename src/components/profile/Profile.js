import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Card, CardContent, Typography, Avatar, IconButton } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

import Tabs from './Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
  },
  cardCenter: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    backgroundColor: teal[500],
    fontSize: 35,
  },
}));

const Profile = ({ match }) => {
  const { container, card, cardCenter, avatar } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={6}>
            <Card className={card}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <Avatar className={avatar}>J</Avatar>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h4">
                      John Doe
                    </Typography>
                    <Typography color="textSecondary" variant="body1">
                      San Francisco, CA
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Joined Auguest 2019
                    </Typography>
                    <IconButton><FontAwesomeIcon icon={faFacebookF} size="xs" /></IconButton>
                    <IconButton><FontAwesomeIcon icon={faTwitter} size="xs" /></IconButton>
                    <IconButton><FontAwesomeIcon icon={faInstagram} size="xs" /></IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={cardCenter}>
              chef rating
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Tabs />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;

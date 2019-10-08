import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(4),
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));

const Tile = ({ number, subtitle, faIcon, color }) => {
  const { card, avatar, } = useStyles();
  return (
    <Card className={card}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h4">{number}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Grid>
        <Grid item>
          <Avatar className={avatar} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={faIcon} size="lg" />
          </Avatar>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Tile;

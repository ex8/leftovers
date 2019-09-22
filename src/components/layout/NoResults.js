import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    flex: 1,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: teal[400],
    width: 75,
    height: 75,
  },
}));

const NoResults = ({ text }) => {
  const { card, avatar } = useStyles();
  return (
    <Card className={card}>
      <Avatar className={avatar}>
        <FontAwesomeIcon icon={faSadCry} size="2x" />
      </Avatar>
      <Typography variant="h6">
        {text}
      </Typography>
    </Card>
  )
};

export default NoResults;

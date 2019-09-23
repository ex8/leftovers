import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const NotAChefUser = () => {
  const { container } = useStyles();
  return (
    <div>
      u not a chef boi
    </div>
  )
};

export default NotAChefUser;

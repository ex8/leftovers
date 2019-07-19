import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from './TopBar';
import NavigationDrawer from './NavigationDrawer';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { container } = useStyles();
  return (
    <div className={container}>
      <TopBar onMenuClick={() => setOpen(!open)} />
      <NavigationDrawer open={open} onClose={() => setOpen(!open)} />
    </div>
  );
}

export default Navigation;

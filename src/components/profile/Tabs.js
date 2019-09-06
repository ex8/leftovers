import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Grid } from '@material-ui/core';

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function TabPanel(props) {
  const { children, value, index, ...rest } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProfileTabs = () => {
  const { container } = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(e, value) {
    setValue(value);
  }

  return (
    <div className={container}>
      <AppBar position="static" color="secondary">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Dishes" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        About...
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((c, i) =>
            <Grid key={i} item xs={12} sm={6} md={4}>
              {/* <Dish /> */}
            </Grid>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Reviews
      </TabPanel>
    </div>
  );
};

export default ProfileTabs;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, AppBar, Tabs, Tab, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

function TabPanel({ children, value, index, ...rest }) {
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

const Settings = () => {
  const [tab, setTab] = useState(0);

  function handleChange(e, value) {
    setTab(value);
  }

  const { container } = useStyles();
  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Settings</Typography>
          </Grid>
          <Grid item xs={12}>
            <AppBar position="static" color="secondary">
              <Tabs value={tab} onChange={handleChange} indicatorColor="primary">
                <Tab label="General" />
                <Tab label="Security" />
              </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0}>
              General settings...
            </TabPanel>
            <TabPanel value={tab} index={1}>
              security settings...
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Settings;

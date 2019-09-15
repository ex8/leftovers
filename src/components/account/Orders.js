import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, CircularProgress, Table, Hidden, Paper, TableBody, TableHead, TableRow, TableCell, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

import api from '../../redux/api';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  table: {
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Orders = () => {
  const { container, table, paper, linkButton } = useStyles();

  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Your Orders</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={paper}>
              <Table className={table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Created</TableCell>
                    <Hidden xsDown><TableCell>Total</TableCell></Hidden>
                    <Hidden smDown><TableCell>Status</TableCell></Hidden>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4].map((n ,i) => (
                    <TableRow key={i} hover>
                      <TableCell component="th" scope="row">2 items</TableCell>
                      <TableCell>9/13/2019 - 9:45pm</TableCell>
                      <Hidden xsDown><TableCell>$9.99</TableCell></Hidden>
                      <Hidden smDown>
                        <TableCell>Completed</TableCell>
                      </Hidden>
                      <TableCell>
                        <Link className={linkButton} to={`/account/orders/idbruh`}>
                          <Button size="small" variant="contained" color="secondary">View</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Orders;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, CircularProgress, Table, Hidden, Paper, TableBody, TableHead, TableRow, TableCell, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import NoResults from '../../layout/NoResults';

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

const ChefDishList = () => {
  const { container, table, paper, linkButton } = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/dishes')
      .then(res => {
        if (res.data.success) {
          setDishes(res.data.dishes);
        }
        setLoading(false);
      })
      .catch(() => setDishes([]));
  }, [])

  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4" gutterBottom>Dishes</Typography>
              </Grid>
              <Grid item>
                <Link className={linkButton} to="/chef/dishes/add">
                  <Button variant="outlined" color="primary" size="large">Add New Dish</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {loading && <CircularProgress />}
            {!loading && dishes.length === 0 && <NoResults text="You do not have any dishes." />}
            {!loading && dishes.length !== 0 && (
              <Paper className={paper}>
                <Table className={table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Stock</TableCell>
                      <Hidden xsDown><TableCell>Price</TableCell></Hidden>
                      <Hidden smDown><TableCell>Rating</TableCell></Hidden>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dishes.map(dish => (
                      <TableRow key={dish._id} hover>
                        <TableCell component="th" scope="row">{dish.title}</TableCell>
                        <TableCell>{dish.stock}</TableCell>
                        <Hidden xsDown><TableCell>${dish.price.toFixed(2)}</TableCell></Hidden>
                        <Hidden smDown>
                          <TableCell><Rating size="small" value={dish.rating} readOnly /></TableCell>
                        </Hidden>
                        <TableCell>
                          <Link className={linkButton} to={`/account/dishes/${dish._id}`}>
                            <Button size="small" variant="contained" color="secondary">Manage</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ChefDishList;

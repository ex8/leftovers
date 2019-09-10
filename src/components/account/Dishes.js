import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, CircularProgress, Table, Hidden, Paper, TableBody, TableHead, TableRow, TableCell, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import api from '../../redux/api';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  table: {
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
}));

const Dishes = () => {
  const { container, table, paper } = useStyles();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/search')
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
            <Typography variant="h4" gutterBottom>Your Dishes</Typography>
          </Grid>
          <Grid item xs={12}>
            {loading && <CircularProgress />}
            {!loading && (
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
                      <TableRow key={dish._id}>
                        <TableCell component="th" scope="row">{dish.title}</TableCell>
                        <TableCell>{dish.stock}</TableCell>
                        <Hidden xsDown><TableCell>${dish.price.toFixed(2)}</TableCell></Hidden>
                        <Hidden smDown>
                          <TableCell><Rating size="small" value={dish.rating} readOnly /></TableCell>
                        </Hidden>
                        <TableCell>
                          <Button size="small" variant="contained" color="secondary">Manage</Button>
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

export default Dishes;

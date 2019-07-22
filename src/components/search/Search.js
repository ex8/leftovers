import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Dish from './Dish';
import Footer from '../layout/Footer';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(4),
  },
}))

const Search = () => {
  const { container } = useStyles();
  const cards = [1, 2, 3, 4];
  return (
    <div className={container}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <SearchFilters />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            Search Dishes
          </Typography>
        </Grid>
        {cards.map((c, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Dish />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Search;

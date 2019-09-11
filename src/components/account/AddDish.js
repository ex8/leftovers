import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import ChipInput from 'material-ui-chip-input'

import Dish from '../search/Dish';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  form: {
    flex: 1,
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(2),
  },
}));

const AddDish = ({ user }) => {
  const [fields, setFields] = useState({
    title: '',
    description: '',
    stock: 0,
    price: 0,
    tags: [],
    ingredients: [],
    location: {
      place: '',
      coords: {
        lat: 0,
        lng: 0,
      },
    },
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('submitted form...');
  };

  const handleAddTagChip = chip => {
    const { tags } = fields;
    setFields({
      ...fields,
      tags: [...tags, chip],
    });
  };

  const handleDeleteTagChip = (chip, index) => {
    const { tags } = fields;
    setFields({
      ...fields,
      tags: tags.filter((tag, i) => index !== i)
    });
  };

  const handleAddIngredientChip = chip => {
    const { ingredients } = fields;
    setFields({
      ...fields,
      ingredients: [...ingredients, chip],
    });
  };

  const handleDeleteIngredientChip = (chip, index) => {
    const { ingredients } = fields;
    setFields({
      ...fields,
      ingredients: ingredients.filter((tag, i) => index !== i)
    });
  };

  const { container, form } = useStyles();
  const { title, description, stock, price, tags, ingredients } = fields;
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Add New Dish</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5">Details</Typography>
            <form className={form} onSubmit={handleFormSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth label="Title" placeholder="Fried Chicken Sandwich" variant="outlined"
                    name="title" value={title} onChange={handleInputChange}
                    required margin="normal" autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth label="Description" placeholder="A spicy fried chicken sandwich made with a special sauce!"
                    variant="outlined" name="description" value={description} onChange={handleInputChange}
                    multiline rows={5} margin="normal" required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Stock" variant="outlined" name="stock" type="number"
                    value={stock} onChange={handleInputChange} margin="normal" required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Price" variant="outlined" name="price" type="number"
                    value={price} onChange={handleInputChange} margin="normal" required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    label="Tags"
                    placeholder="American, Fried, Spicy, Cheap"
                    variant="outlined"
                    fullWidth
                    value={tags}
                    onAdd={handleAddTagChip}
                    onDelete={handleDeleteTagChip}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    label="Ingredients"
                    placeholder="Chicken, Flour, Egg, Breadcrumbs, Salt, Pepper"
                    variant="outlined"
                    fullWidth
                    value={ingredients}
                    onAdd={handleAddIngredientChip}
                    onDelete={handleDeleteIngredientChip}
                    required
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h5">Preview</Typography>
            <Dish dish={{ ...fields, chef: user }} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" color="secondary" onClick={handleFormSubmit}>
              Add Dish
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(AddDish);

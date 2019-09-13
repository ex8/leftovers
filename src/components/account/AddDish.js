import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button, Tooltip, IconButton, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import ChipInput from 'material-ui-chip-input'
import { DropzoneArea } from 'material-ui-dropzone'

import Dish from '../search/Dish';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  form: {
    flex: 1,
    paddingRight: theme.spacing(2),
  },
  chipInput: {
    paddingBottom: theme.spacing(1),
  },
}));

const AddDish = ({ user }) => {
  const [fields, setFields] = useState({
    images: [],
    title: '',
    description: '',
    stock: 0,
    price: 0,
    tags: [],
    ingredients: [],
    location: {
      place: user.address,
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

  const handleImageChange = images => {
    setFields({
      images,
      ...fields
    });
  }

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

  const { container, form, chipInput } = useStyles();
  const { title, description, stock, price, tags, ingredients, location } = fields;
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Add New Dish</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5">Information</Typography>
            <form className={form} onSubmit={handleFormSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <DropzoneArea
                    dropzoneText="Click or drag/drop image file(s) here"
                    onChange={handleImageChange}
                    acceptedFiles={['image/*']}
                    filesLimit={5}
                    maxFileSize={5000000}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth label="Title" placeholder="Fried Chicken Sandwich" variant="outlined"
                    name="title" value={title} onChange={handleInputChange}
                    required margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth label="Description" placeholder="A spicy fried chicken sandwich made with a special sauce!"
                    variant="outlined" name="description" value={description} onChange={handleInputChange}
                    multiline rows={5} margin="normal" required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    className={chipInput}
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
                  <Typography variant="h5">
                    Pickup Information 
                    <Tooltip title="Details related to consumers after ordering" placement="right">
                      <IconButton size="small" disableRipple disableTouchRipple>
                        <FontAwesomeIcon icon={faQuestionCircle} />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth label="Pickup Address" variant="outlined"
                    name="location" value={location.place} disabled onChange={handleInputChange}
                    required margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h5">
                    Search Filters 
                    <Tooltip title="Keywords that better enhance your dish being searched" placement="right">
                      <IconButton size="small" disableRipple disableTouchRipple>
                        <FontAwesomeIcon icon={faQuestionCircle} />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    className={chipInput}
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

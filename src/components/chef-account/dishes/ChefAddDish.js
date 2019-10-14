import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button, Tooltip, IconButton, CircularProgress, InputAdornment, Paper, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import ChipInput from 'material-ui-chip-input'
import { DropzoneArea } from 'material-ui-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import Dish from '../../search/Dish';
import api from '../../utils/api';
import Alert from '../../layout/Alert';
import useScript from '../../utils/useScript';

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
  alertMargin: {
    marginBottom: theme.spacing(2),
  },
  addressContainer: {
    flex: 1,
    position: 'relative',
  },
  addressPaper: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    left: 0,
    right: 0,
  },
}));

const ChefAddDish = ({ user }) => {
  const [fields, setFields] = useState({
    images: [],
    title: '',
    description: '',
    stock: 0,
    price: 0,
    tags: [],
    ingredients: [],
    address: '',
    coordinates: [],
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, error] = useScript(`https://maps.googleapis.com/maps/api/js?key=&libraries=places`);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setErrorMessage('');
    setFields({
      ...fields,
      [name]: value
    });
  };

  const handleImageChange = images => {
    setErrorMessage('');
    setFields({
      ...fields,
      images,
    });
  }

  const handleAddTagChip = chip => {
    const { tags } = fields;
    setErrorMessage('');
    setFields({
      ...fields,
      tags: [...tags, chip],
    });
  };

  const handleDeleteTagChip = (chip, index) => {
    const { tags } = fields;
    setErrorMessage('');
    setFields({
      ...fields,
      tags: tags.filter((tag, i) => index !== i)
    });
  };

  const handleAddIngredientChip = chip => {
    const { ingredients } = fields;
    setErrorMessage('');
    setFields({
      ...fields,
      ingredients: [...ingredients, chip],
    });
  };

  const handleDeleteIngredientChip = (chip, index) => {
    const { ingredients } = fields;
    setErrorMessage('');
    setFields({
      ...fields,
      ingredients: ingredients.filter((tag, i) => index !== i)
    });
  };

  const handleAddressChange = address => {
    setFields({
      ...fields,
      address,
    });
  };

  const handleCoordsChange = (lng, lat) => {
    setFields({
      ...fields,
      coordinates: [lng, lat],
    });
  };

  const handleAddressSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => handleCoordsChange(coords.lng, coords.lat))
      .then(() => handleAddressChange(address))
      .catch(() => console.error('Error selecting address.'));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      const { images, title, description, stock, price, tags, ingredients, address, coordinates } = fields;
      let fd = new FormData();
      images.forEach(image => fd.append('images', image));
      fd.set('title', title);
      fd.set('description', description);
      fd.set('stock', stock);
      fd.set('price', price);
      fd.set('tags', tags);
      fd.set('ingredients', ingredients);
      fd.set('pickupAddress', address);
      fd.set('coordinates', coordinates);
      api.post('/api/dishes', fd)
        .then(res => {
          if (res.data.success) {
            setErrorMessage('');
            setSuccessMessage('Your dish was successfully added. It is under verification review.');
          }
        })
        .catch(err => setErrorMessage(`You cannot add a new dish at this time. ERR: ${err.errmsg}`));
    }
    setLoading(false);
  };

  const validateForm = () => {
    const { images, title, description, stock, price, ingredients, address } = fields;
    if (images.length === 0) {
      setErrorMessage('You must have atleast one image.');
      return false;
    }
    else if (title.length === 0) {
      setErrorMessage('You must set a title.');
      return false;
    }
    else if (description.length === 0) {
      setErrorMessage('You must set a description.');
      return false;
    }
    else if (ingredients.length === 0) {
      setErrorMessage('You must set your dish ingredients.');
      return false;
    }
    else if (stock < 1) {
      setErrorMessage('You must set a valid stock number.');
      return false;
    }
    else if (price < 0) {
      setErrorMessage('You must set a valid price number (USD).');
      return false;
    }
    else if (address.length === 0) {
      setErrorMessage('You must set a pickup address.');
      return false;
    }
    return true;
  };

  const { container, form, chipInput, alertMargin, addressContainer, addressPaper } = useStyles();
  const { title, description, stock, price, tags, ingredients, address } = fields;
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Add New Dish</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5">Information</Typography>
            <div className={alertMargin}>
              {successMessage && <Alert variant="success" message={successMessage} />}
            </div>
            <div className={alertMargin}>
              {errorMessage && <Alert variant="error" message={errorMessage} />}
            </div>
            <form className={form} onSubmit={handleFormSubmit} encType="multipart/form-data">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <DropzoneArea
                    dropzoneClass="images"
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
                    Ingredients
                    <Tooltip title="Dish ingredients, be sure to list allergetic ingredients!" placement="right">
                      <IconButton size="small" disableRipple disableTouchRipple>
                        <FontAwesomeIcon icon={faQuestionCircle} />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ChipInput
                    className={chipInput}
                    label="Ingredients"
                    placeholder="Hit Enter or Space to add an ingredient"
                    variant="outlined"
                    fullWidth
                    value={ingredients}
                    onAdd={handleAddIngredientChip}
                    onDelete={handleDeleteIngredientChip}
                    newChipKeyCodes={[13, 32]}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Pickup Information
                    <Tooltip title="Pickup details shown to consumers" placement="right">
                      <IconButton size="small" disableRipple disableTouchRipple>
                        <FontAwesomeIcon icon={faQuestionCircle} />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {loaded && !error && (
                    <PlacesAutocomplete
                      value={address}
                      onChange={handleAddressChange}
                      onSelect={handleAddressSelect}
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className={addressContainer}>
                          <TextField
                            label="Pickup Address"
                            margin="normal"
                            variant="outlined"
                            value={address}
                            fullWidth
                            required
                            {...getInputProps()}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment>
                                  {loading && <CircularProgress size={25} />}
                                  {!loading && (
                                    <IconButton onClick={handleAddressSelect}>
                                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </IconButton>
                                  )}
                                </InputAdornment>
                              )
                            }}
                          />
                          <div>
                            <Paper className={addressPaper} square>
                              <div>
                                {suggestions.map((suggestion, i) => (
                                  <MenuItem key={i} button {...getSuggestionItemProps(suggestion)}>
                                    {suggestion.description}
                                  </MenuItem>
                                ))}
                              </div>
                            </Paper>
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  )}
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
                    placeholder="Hit Enter or Space to add a search keyword"
                    variant="outlined"
                    fullWidth
                    value={tags}
                    onAdd={handleAddTagChip}
                    onDelete={handleDeleteTagChip}
                    newChipKeyCodes={[13, 32]}
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
            <Button
              disabled={loading}
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleFormSubmit}
            >
              {loading && <CircularProgress size={25} color="inherit" />}
              {!loading && 'Add New Dish'}
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

export default connect(mapStateToProps)(ChefAddDish);

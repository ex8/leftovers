import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TextField, InputAdornment, IconButton, CircularProgress, Paper, MenuItem, Container, Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import useScript from '../../../utils/useScript';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    left: 0,
    right: 0,
  },
}));

const AdressVerifyStep = ({ fields, setFields }) => {
  const [loaded, error] = useScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyBUSPc9zpJ1on4Q6Oe7GwSHFfdMpfflGJU&libraries=places`);

  const handleChange = address => {
    setFields({
      ...fields,
      address,
    });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => handleChange(address))
      .catch(() => console.error('Error selecting address.'));
  };

  const { root, container, paper } = useStyles();
  const { address } = fields;
  return (
    <div className={root}>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom>
              Your address will be used for the location of the dish upon search.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {loaded && !error && (
              <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div className={container}>
                    <TextField
                      autoFocus
                      label="Enter your address"
                      margin="normal"
                      variant="outlined"
                      value={address}
                      fullWidth
                      {...getInputProps()}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            {loading && <CircularProgress size={25} />}
                            {!loading && (
                              <Link to="/search">
                                <IconButton onClick={handleSelect}>
                                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </IconButton>
                              </Link>
                            )}
                          </InputAdornment>
                        )
                      }}
                    />
                    <div>
                      <Paper className={paper} square>
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
        </Grid>
      </Container>
    </div>
  );
};

export default AdressVerifyStep;

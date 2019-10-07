import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TextField, InputAdornment, IconButton, CircularProgress, Paper, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setUserLocation } from '../../redux/actions/user.actions';
import useScript from '../utils/useScript';

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

const AddressBar = ({ place, setUserLocation, history, getDishes, redirect }) => {
  const [address, setAddress] = useState(place);
  const [loaded, error] = useScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyBUSPc9zpJ1on4Q6Oe7GwSHFfdMpfflGJU&libraries=places`);
  const { root, container, paper } = useStyles();

  const handleChange = address => setAddress(address);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => setUserLocation(address, latLng))
      .then(() => setAddress(address))
      .then(() => getDishes ? getDishes() : null)
      .then(() => redirect ? history.push('/search') : null)
      .catch(() => console.error('Error selecting address.'));
  };

  return (
    <div className={root}>
      {loaded && !error && (
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className={container}>
              <TextField
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
    </div>
  );
};

const mapStateToProps = state => ({
  place: state.userReducer.location.place,
});

const mapDispatchToProps = {
  setUserLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddressBar));

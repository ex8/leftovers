import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TextField, InputAdornment, IconButton, CircularProgress, Paper, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

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

const AddressBar = ({ history }) => {
  const [address, setAddress] = useState('');
  const { root, container, paper } = useStyles();

  const handleChange = address => setAddress(address);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => console.log('Success', coords))
      .then(() => setAddress(address))
      .then(() => history.push('/search'))
      .catch(error => console.error('Error', error));
  };

  return (
    <div className={root}>
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
                    <MenuItem key={i}>
                      <div {...getSuggestionItemProps(suggestion)}>
                        {suggestion.description}
                      </div>
                    </MenuItem>
                  ))}
                </div>
              </Paper>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default withRouter(AddressBar);

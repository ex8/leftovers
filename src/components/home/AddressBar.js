import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const AddressBar = ({ history }) => {
  const [place, setPlace] = useState('');
  const { container } = useStyles();

  const handleFormSubmit = e => {
    e.preventDefault();
    history.push('/search');
  };

  return (
    <div className={container}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Enter your address"
          margin="normal"
          variant="outlined"
          fullWidth
          value={place}
          onChange={e => setPlace(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Link type="submit" to="/search">
                  <IconButton onClick={handleFormSubmit}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </IconButton>
                </Link>
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default withRouter(AddressBar);

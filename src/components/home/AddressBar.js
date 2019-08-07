import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.primary,
  },
}));

const AddressBar = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <form>
        <TextField
          label="Enter your address"
          margin="normal"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <FontAwesomeIcon icon={faSearch} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
}

export default AddressBar;

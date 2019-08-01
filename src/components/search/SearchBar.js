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

const SearchBar = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <form>
        <TextField
          label="Search"
          margin="normal"
          variant="outlined"
          placeholder="What are you craving?"
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

export default SearchBar;

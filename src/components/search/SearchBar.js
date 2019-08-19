import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const SearchBar = ({ queryString, setQueryString, handleSubmit }) => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search"
          margin="normal"
          variant="outlined"
          placeholder="What are you craving?"
          fullWidth
          value={queryString}
          onChange={e => setQueryString(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleSubmit}>
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

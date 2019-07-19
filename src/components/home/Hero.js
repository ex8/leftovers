import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Leftovers
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Order hand-crafted, home cooked meals!
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <form>
              <TextField
                label="Search"
                margin="normal"
                variant="outlined"
                placeholder="(e.g. Pizza, Falafel, Chinese, Italian...)"
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;

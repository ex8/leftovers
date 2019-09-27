import React from 'react';
import { Grid, TextField, Container, Typography, InputAdornment } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const ProfileStep = ({ fields, setFields }) => {
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFields({
      ...fields,
      social: {
        ...fields.social,
        [name]: value,
      },
      [name]: value,
    });
  }

  const { bio, social } = fields;
  const { facebook, twitter, instagram } = social;
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="space-around">
          <Grid item xs={12}>
            <Typography gutterBottom>
              Your profile page will be visible to all using your username.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" fullWidth label="Bio" autoFocus
              name="bio" value={bio} onChange={handleInputChange} multiline rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" fullWidth label="Facebook URL"
              name="facebook" value={facebook} onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" fullWidth label="Twitter URL"
              name="twitter" value={twitter} onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <FontAwesomeIcon icon={faTwitter} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" fullWidth label="Instagram URL"
              name="instagram" value={instagram} onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <FontAwesomeIcon icon={faInstagram} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileStep;

import React from 'react';
import { Grid, TextField, Container } from '@material-ui/core';

const GeneralInformationStep = ({ fields, setFields }) => {
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  }

  const { firstName, lastName, email, phone, password, password2 } = fields;
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="space-around">
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined" required fullWidth label="First Name" autoFocus
              name="firstName" value={firstName} onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined" required fullWidth label="Last Name"
              name="lastName" value={lastName} onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ type: 'email' }} margin="normal"
              variant="outlined" required fullWidth label="Email Address"
              name="email" value={email} onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" required fullWidth label="Phone Number" margin="normal"
              name="phone" value={phone} onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" required fullWidth margin="normal"
              label="Password" type="password"
              name="password" value={password} onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined" required fullWidth
              label="Password Again" type="password" margin="normal"
              name="password2" value={password2} onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GeneralInformationStep;

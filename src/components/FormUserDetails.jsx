import React from 'react';
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <div className=" flex flex-col justify-center items-center px-70 mx-70">
        <TextField
          label="First Name"
          placeholder="Enter Your First Name"
          margin="normal"
          onChange={(e) => handleChange('firstName')(e)}
          defaultValue={values.firstName}
          fullWidth
        />

        <TextField
          label="Last Name"
          placeholder="Enter Your City"
          margin="normal"
          onChange={(e) => handleChange('lastName')(e)}
          defaultValue={values.lastName}
          fullWidth
        />

        <TextField
          label="Email"
          placeholder="Enter Your Email"
          margin="normal"
          onChange={(e) => handleChange('email')(e)}
          defaultValue={values.email}
          fullWidth
        />
        <Button onClick={continueStep} color="primary" variant="contained">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default FormUserDetails;

import React from 'react';
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Enter Personal Details</Typography>
        </Toolbar>
      </AppBar>
      <div className=" flex flex-col justify-center items-center px-70 mx-70">
        <TextField
          label="Occupation"
          placeholder="Enter Your Occupation"
          margin="normal"
          onChange={(e) => handleChange('occupation')(e)}
          defaultValue={values.occupation}
          fullWidth
        />

        <TextField
          label="City"
          placeholder="Enter Your City"
          margin="normal"
          onChange={(e) => handleChange('city')(e)}
          defaultValue={values.city}
          fullWidth
        />

        <TextField
          label="Bio"
          placeholder="Enter Your Bio"
          margin="normal"
          onChange={(e) => handleChange('bio')(e)}
          defaultValue={values.bio}
          fullWidth
        />
        <Button onClick={continueStep} color="primary" variant="contained">
          Continue
        </Button>
        <Button onClick={backStep} color="secondary" variant="contained">
          Back
        </Button>
      </div>
    </div>
  );
};

export default FormPersonalDetails;

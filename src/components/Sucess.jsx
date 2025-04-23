import React from 'react';
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';

const Sucess = ({ nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep;
  };
  const backStep = (e) => {
    e.preventDefault();
    prevStep;
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Confrim Data</Typography>
        </Toolbar>
      </AppBar>
      <div className=" flex flex-col justify-center items-center px-70 mx-70">
        <h1 className=" font-extrabold text-3xl">
          Thank You For Your Submission
        </h1>
        <p>You will get an email with further instructions.</p>
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

export default Sucess;

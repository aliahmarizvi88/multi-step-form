import React from 'react';
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
const Confrim = ({ values, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Confrim Data</Typography>
        </Toolbar>
      </AppBar>
      <div className=" flex flex-col justify-center items-center px-70 mx-70">
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
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

export default Confrim;

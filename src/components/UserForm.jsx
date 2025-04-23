import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confrim from './Confrim';
import Sucess from './Sucess';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const values = formData;

  switch (step) {
    case 1:
      return (
        <div>
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Confrim nextStep={nextStep} prevStep={prevStep} values={values} />
        </div>
      );
    case 4:
      return (
        <div>
          <Sucess nextStep={nextStep} prevStep={prevStep} />
        </div>
      );
    default:
      console.log('This is a multi-step form built with React.');
  }
};

export default UserForm;

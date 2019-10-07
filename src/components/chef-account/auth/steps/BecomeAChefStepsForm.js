import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, StepContent, CircularProgress } from '@material-ui/core';
import { isEmail, isMobilePhone } from 'validator'

import GeneralInformationStep from './GeneralInformationStep';
import ProfileStep from './ProfileStep';
import AddressVerifyStep from './AddressVerifyStep';
import IdVerifyStep from './IdVerifyStep';
import Alert from '../../../layout/Alert';
import api from '../../../utils/api';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  actionsContainer: {
    margin: theme.spacing(2),
  },
  alert: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

const BecomeAChefStepsForm = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    password2: '',
    address: '',
    driversLicenseImage: 'bruhhhh',
    bio: '',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    }
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  function getSteps() {
    return ['General Information', 'Address Verification', 'Public Profile', 'ID Verification'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <GeneralInformationStep 
            fields={fields} 
            setFields={setFields} 
            setErrorMessage={setErrorMessage} 
          />
        );
      case 1:
        return (
          <AddressVerifyStep 
            fields={fields} 
            setFields={setFields} 
          />
        );
      case 2:
        return <ProfileStep 
          fields={fields} 
          setFields={setFields} 
        />;
      case 3:
        return <IdVerifyStep 
          fields={fields} 
          setFields={setFields} 
        />;
      default:
        return 'Unknown step';
    }
  }
  
  const isStepOptional = step => {
    return step === 2;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      api.post('/api/chef/signup', fields)
        .then(res => {
          if (res.data.success) {
            setSuccessMessage('Chef account successfully created. You may now login.')
            handleNext();
          }
          else {
            setErrorMessage(res.data.message);
          }
        })
        .catch(err => setErrorMessage('You cannot create a chef account at this time.'));
    }
    setLoading(false);
  };

  const validateForm = () => {
    const { 
      firstName, lastName, email, phone, 
      username, password, password2, address 
    } = fields;
    if (firstName === '' || lastName === '') {
      setErrorMessage('Please enter a valid first and last name.');
      return false;
    }
    else if (password !== password2) {
      setErrorMessage('Please enter matching passwords.');
      return false;
    }
    else if (!isEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    else if (!isMobilePhone(phone)) {
      setErrorMessage('Please enter a valid phone number.');
      return false;
    }
    else if (username === '') {
      setErrorMessage('Please enter a username.');
      return false;
    }
    else if (address === '') {
      setErrorMessage('Please enter an address.');
      return false;
    }
    return true;
  };

  const { container, button, actionsContainer, alert, form } = useStyles();
  return (
    <div className={container}>
      {successMessage && <Alert variant="success" message={successMessage} />}
      {errorMessage && <Alert variant="error" message={errorMessage} />}
      {activeStep === steps.length && (
        <div className={alert}>
          <Alert variant="success" message="All steps completed!" />
        </div>
      )}
      <form className={form} noValidate onSubmit={handleFormSubmit}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, i) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(i)) {
              labelProps.optional = <Typography variant="caption">optional</Typography>;
            }
            if (isStepSkipped(i)) {
              stepProps.completed = false;
            }
            return (
              <Step key={step} {...stepProps}>
                <StepLabel {...labelProps}>{step}</StepLabel>
                <StepContent>
                  {getStepContent(i)}
                  <div className={actionsContainer}>
                    <Button
                      variant="contained"
                      className={button}
                      color="secondary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                  </Button>
                    <Button
                      disabled={activeStep === steps.length - 1}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={button}
                    >
                      Next
                  </Button>
                    {activeStep === steps.length - 1 && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFormSubmit}
                        className={button}
                      >
                        {loading && <CircularProgress size={25} color="inherit" />}
                        {!loading && 'Finish'}
                    </Button>
                    )}
                    {isStepOptional(activeStep) && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSkip}
                        className={button}
                      >
                        Skip
                    </Button>
                    )}
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </form>
    </div>
  );
};

export default BecomeAChefStepsForm;

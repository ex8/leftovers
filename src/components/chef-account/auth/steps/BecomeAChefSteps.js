import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, StepContent } from '@material-ui/core';

import GeneralInformationStep from './GeneralInformationStep';
import ProfileStep from './ProfileStep';
import AddressVerifyStep from './AddressVerifyStep';
import IdVerifyStep from './IdVerifyStep';

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
    marginBottom: theme.spacing(2),
  },
}));

const BecomeAChefSteps = ({ fields, setFields }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  function getSteps() {
    return ['General Information', 'Address Verification', 'Public Profile', 'ID Verification'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <GeneralInformationStep fields={fields} setFields={setFields} />;
      case 1:
        return <AddressVerifyStep fields={fields} setFields={setFields} />;
      case 2:
        return <ProfileStep fields={fields} setFields={setFields} />;
      case 3:
        return <IdVerifyStep fields={fields} setFields={setFields} />;
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
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const { container, instructions, button, actionsContainer } = useStyles();
  return (
    <div className={container}>
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
                <Typography>{getStepContent(i)}</Typography>
                <div className={actionsContainer}>
                  <div>
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
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
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
                </div>
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length && (
        <div>
          <Typography className={instructions}>
            All steps completed!!
          </Typography>
        </div>
      )}

      {/* <Stepper activeStep={activeStep}>
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
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={instructions}>
              All steps completed!!
            </Typography>
          </div>
        ) : (
            <div>
              <Typography className={instructions}>{getStepContent(activeStep)}</Typography>
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
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
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
          )}
      </div> */}
    </div>
  );
};

export default BecomeAChefSteps;

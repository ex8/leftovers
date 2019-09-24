import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Stepper, Step, StepLabel, Card, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    backgroundColor: 'transparent',
  },
}));

function getSteps() {
  return ['Initial', 'Address Verification', 'ID Verification', 'Profile', 'Finish'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'initial warm welcoming';
    case 1:
      return 'address verify';
    case 2:
      return 'id verify';
    case 3:
      return 'profile'
    case 4:
      return 'next steps...';
    default:
      return 'unknown step...';
  }
}

const BecomeAChef = ({ user }) => {
  const [activeStep, setActiveStep] = useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleFinish() {
    setActiveStep(0);
  }

  const { container, button, content, stepper } = useStyles();
  const steps = getSteps();
  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Become a Chef</Typography>
          </Grid>
          <Grid item xs={12}>
            {user.isChef && (
              <Card>
                already a chef...
              </Card>
            )}
            {!user.isChef && (
              <div>
                <Stepper className={stepper} alternateLabel activeStep={activeStep}>
                  {steps.map((step, i) => (
                    <Step key={i}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Typography className={content}>{getStepContent(activeStep)}</Typography>
                <Button
                  className={button}
                  disabled={activeStep === 0}
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                >
                  Back
                </Button>
                {activeStep !== steps.length - 1 ? (
                  <Button 
                    className={button} 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                ): (
                  <Button 
                    className={button} 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleFinish}
                  >
                    Finish
                  </Button>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(BecomeAChef);

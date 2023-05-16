import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Raise Request',
  'Verification of admin',
  'Approved',
];

export default function HorizontalLabelPositionBelowStepperApproved() {
  return (
    <Box sx={{ width: '100%' }} color='green'>
      <Stepper sx={{bgcolor:'green'}} activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
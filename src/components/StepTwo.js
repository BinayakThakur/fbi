import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HorizontalLabelPositionBelowStepperApproved from './ApprovedStepper';

export default function StepTwo() {
  return (
    <Card sx={{ maxWidth: 1200 }} className="mt-5 gradient-background-4">
    
      <CardContent className='mt-4'>
        <HorizontalLabelPositionBelowStepperApproved></HorizontalLabelPositionBelowStepperApproved>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField fullWidth id="input-with-sx" label="Your request has been approved" variant="standard" disabled/>
      </Box>
    
      </CardContent>
      <CardActions>

<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  spacing={3}
>
    <Grid item>
    <Button size="small" variant="contained" color="grey" >Currently Assigned : Abc</Button>
    </Grid>
    <Grid item>
    <Button size="small" variant="contained" color="yellow">Update</Button>
    </Grid>
</Grid>
      
        
      </CardActions>
    </Card>
  );
}
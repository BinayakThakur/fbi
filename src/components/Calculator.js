import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Calci() {
  return (
    <Card sx={{ minHeight: 200,width:325 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        Calculator
        </Typography>
        <Typography variant="body2">
   Demo of a Simple Calculator based upon vannila javascript and
            bootstrap css library .

        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://binayakthakur.github.io/calculator/" target="_blank" className="ms-4"><Button variant="contained" className="mt-3 ms-5">Check it out</Button></a>
      </CardActions>
    </Card>
  );
}
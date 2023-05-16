import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DFS() {
  return (
    <Card sx={{ minHeight: 200,width:325 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        Depth First Search 
        </Typography>
        <Typography variant="body2">
        Created an GUI , to demonstrate
Depth first search in graph coded using vanilla JavaScript ,
Styled using bootstrap.

        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://binayakthakur.github.io/DFS/" target="_blank" className="ms-4"><Button variant="contained" className="ms-5">Check it out</Button></a>
      </CardActions>
    </Card>
  );
}
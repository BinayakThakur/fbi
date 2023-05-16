import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Spring() {
  return (
    <Card sx={{ minHeight: 200,width:325 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        Backend Spring API
        </Typography>
        <Typography variant="body2">
            Back end API deployed to heroku app in Spring boot code is avilable in git still in development.

        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://react-rest-spring.herokuapp.com/greet" target="_blank" className="ms-4"><Button variant="contained" className="ms-5">Check it out</Button></a>
      </CardActions>
    </Card>
  );
}
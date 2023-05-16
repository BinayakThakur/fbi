import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Travel() {
  return (
    <Card sx={{ minHeight: 200,width:325 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        Dynomix
        </Typography>
        <Typography variant="body2">
            React Fullstack application to demonstrate CRUD ,Spring boot in back-end deployed live on Heroku app and code is available in git.

        </Typography>
      </CardContent>
      <CardActions>
       <a href="https://dynomix.herokuapp.com/home" target="_blank" className="ms-4"><Button variant="contained" className="ms-5">Check it out</Button></a>
      </CardActions>
    </Card>
  );
}
import { AppBar,Typography,Toolbar,useScrollTrigger, Slide,InputBase ,IconButton,Box, Button, Grid} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import * as React from 'react';
import SplitButton from "./MyHub";


  
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

    
const Nav =(props)=>{

    
    return(
        <ElevationScroll>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>

        <IconButton>
          <Typography
          className="ms-5"
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: {  sm: 'block' } }}
          >
            
              <Grid
              container
              direction="row"
              justifyContent="flex-start"
                alignItems="center"
                >
                  <Grid item>
                  <SplitButton></SplitButton>
                  </Grid>
                  <Grid item>
                  <Button color="black" sx={{p:1,m:1}} variant="contained">Person Hub</Button>
                  </Grid>
                  <Grid item>
                  <Button color="black" sx={{p:1,m:1}} variant="contained">assistance now</Button>
                  </Grid>
                  <Grid item>
                  <Button color="black" sx={{p:1,m:1}} variant="contained">Your Id</Button>
                  </Grid>
                  <Grid item>
                  <Button color="grey" sx={{p:1,m:1}} variant="contained">Favourites</Button>
                  </Grid>
                  </Grid>

                      
                     
            <div className="ms-5" style={{color:"white"}}></div>  
          </Typography>
          </IconButton>
  
        </Toolbar>
      </AppBar>
    </Box>
    </ElevationScroll>        


    );
}
export default Nav;
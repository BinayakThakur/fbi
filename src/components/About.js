import { Container, Grid, Paper, Typography } from "@mui/material";
import ColorsTimeline from "./Education";
import SliderSizes from "./Skills";

const About =()=>{
    return(
         <div className="mt-5">
        <div className="mt-5">
       
            <div className="row mb-4 mt-5 p-3">
                <div className="col-3 mt-5 mb-4">
                <img src="https://plus.unsplash.com/premium_photo-1681843981010-a0666d249ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1aXQlMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{width:"16rem"}} className="img-thumbnail card-4"></img>
                </div>
                <div className="col mt-5" style={{backgroundColor:"#fffff",color:"black"}}>
                <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                >
                    <Grid item>
                        <Typography variant="h4" sx={{fontWeight: 'bold'}} component="h2">Welcome IDXYZ123</Typography>
                    </Grid>
                    <Grid item className="mt-3">
                        <Typography variant="body1">Senior Analyst</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">idxyz123@abn.com.au</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">reports to : pxz@abn.com.au</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" sx={{color:'GrayText'}}>Last updated 3 mins ago</Typography>
                    </Grid>
                </Grid>
                </div>
    
                </div>
            </div>
            </div>
        

     
          
 
           
    
      
        );
}
export default About;

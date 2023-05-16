import { Button, Container,Typography } from "@mui/material";

const Connect = ()=>{
    return(<Container>
         <div>
       
       <div className="row">
           <div className="col-3 mt-2" style={{width:"18rem"}} >
           <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-2.png" style={{width:"16rem"}} className="img-thumbnail card-4"></img>
           <a href="https://github.com/BinayakThakur" target="_blank"><Button variant="contained" className="mt-3">Check it out</Button></a>
           </div>
           <div className="col-3 mt-2" style={{width:"18rem"}} >
           <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-2.png" style={{width:"16rem"}} className="img-thumbnail card-4"></img>
           <a href="https://www.linkedin.com/in/binayak-thakur-127b181b8/" target="_blank"><Button variant="contained" className="mt-3">Check it out</Button></a>
           </div>
           <div className="col-3 mt-2" style={{width:"18rem"}} >
           <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" style={{width:"16rem"}} className="img-thumbnail card-4"></img>
           <a href="https://www.hackerrank.com/thakurganesh919?hr_r=1" target="_blank"><Button variant="contained" className="mt-3">Check it out</Button></a>
           </div>
           
           </div>
           
           
       </div>
      


    </Container>)
}
export default Connect;
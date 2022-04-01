import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
    btn:{
         backgroundColor:"violet",
         '&:hover':{
              backgroundColor:'pink'
         }
    },
    fieldValue:{
    width:"50%"
    },
    contactForm:{
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
    }
})

const Contactus = () => {
     const classes = useStyles();
    return ( 
        <div className="contactpage">
   <Navbar />
        <div className="mainpage">
<form autoComplete="off" className={classes.contactForm}>
<TextField className={classes.fieldValue} id="name" label="Name" variant="outlined"
 required style={{margin:"20px 0px"}}/>
<TextField className={classes.fieldValue} id="email" label="email" variant="outlined"
 required style={{margin:"20px 0px"}}/>
 <TextField className={classes.fieldValue} id="message" label="message" variant="outlined"
 required  multiline
 rows={4} style={{margin:"20px 0px"}}/>
<Button
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
  SUBMIT
</Button>
</form>
        </div>
        <Footer />
        </div>
     
     );
}
export default Contactus
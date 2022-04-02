import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from "react"

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
     const [name,setname] = useState("");
     const [email,setemail] = useState("");
     const [message,setmessage] = useState("");
     const [typeMembership,setMembership] = useState("KYUSDA MEMBER");
     const handleSubmit = (e)=>{
e.preventDefault();
if(name && email && message){
     console.log(name,email,message)
}

     }

    return ( 
        <div className="contactpage">
   <Navbar />
        <div className="mainpage">
<form autoComplete="off" className={classes.contactForm} onSubmit={handleSubmit}>
<TextField className={classes.fieldValue} id="name" label="Name" variant="outlined"
 required style={{margin:"20px 0px"}} value={name} onChange={(e)=>{
      setname(e.target.value)
 }}/>
<TextField className={classes.fieldValue} id="email" label="email" variant="outlined"
 required style={{margin:"20px 0px"}} value={email}  onChange={(e)=>{
     setemail(e.target.value)
}}/>
 <TextField className={classes.fieldValue} id="message" label="message" variant="outlined"
 required  multiline
 rows={4} style={{margin:"20px 0px"}} value={message}  onChange={(e)=>{
     setmessage(e.target.value)
}}/>
<label>Type of Membership</label>
<select name="type"  style={{margin:"20px 0px"}}
 id="type"
  value={typeMembership}
  onChange={(e)=>setMembership(e.target.value)}>
<option value="Visitor">Visitor</option>
<option value="Student member">Student Member</option>
<option value="Church member">Church Member</option>
</select>

<Button  style={{margin:"10px 0px"}}
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
/* eslint-disable react-hooks/rules-of-hooks */
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import AuthNavbar from './component/authNav';
import {useState} from 'react';
import React from 'react';

const useStyles = makeStyles((theme) => ({
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

}));

const emailerror = document.querySelector(".emailerror");
const  passworderror = document.querySelector(".passworderror");

const loginPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
const [email,setemail] = useState("");
const [password,setpassword] = useState("");


        const handleSubmit = async (e)=>{
          email.textContent = "";
          passworderror.textContent = "";
          ///communicate with our backend
     e.preventDefault();
     const response = await fetch(`http://localhost:5000/api/v1/login`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password})
     });
        const data = await  response.json();
        console.log(data);
        if(data.loggedIn){
          alert(`${data.loggedIn.email} logged in successfully`);
     window.location = "/Home.js"
        }
        if(data.errormess){
          emailerror.textContent = data.errormess.email
          passworderror.textContent = data.errormess.password
      }
                 }
    return (  
        <div className="signUp">
            <AuthNavbar />
            <form autoComplete="off" className={classes.contactForm} onSubmit={handleSubmit}>
 <TextField type="text" className={classes.fieldValue} id="email" label="email" variant="outlined"
 required style={{margin:"20px 0px"}} value={email}  onChange={(e)=>{
     setemail(e.target.value)
}}/>
<div className='emailerror'></div>
 <TextField type="password"  className={classes.fieldValue} id="password" label="password" variant="outlined"
 required style={{margin:"20px 0px"}} value={password}  onChange={(e)=>{
     setpassword(e.target.value)
}}/>
<div className='passworderror'></div>
<div></div>

<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
  SIGNUP
</Button>
</form>
        </div>
);}
 
export default loginPage;
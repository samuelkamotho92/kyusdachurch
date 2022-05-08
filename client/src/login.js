/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import AuthNavbar from './components/authNav';
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



const loginPage = () => {
     let emailerror = document.querySelector(".emailerror");
    let  passworderror = document.querySelector(".passworderror");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
const [email,setemail] = useState("");
const [password,setpassword] = useState("");

        const handleSubmit = async (e)=>{
          e.preventDefault();
             setemail("");
             setpassword("");
          ///communicate with our backend
          emailerror.textContent = "";
          passworderror.textContent = "";
     const response = await fetch(`http://localhost:5000/api/v1/login`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password}),
credentials: 'include',
withCredentials:true
     });
        const data = await  response.json();
        console.log(data);
        if(data.loggedIn && response.status == 200){
          alert(`${data.loggedIn.email} logged in successfully `);
          location.assign("/Post");
        }
        if(data.errormess){
          emailerror.textContent = data.errormess.email;
          passworderror.textContent = data.errormess.password;
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
<div className='emailerror' style={{color:"red"}}></div>
 <TextField type="password"  className={classes.fieldValue} id="password" label="password" variant="outlined"
 required style={{margin:"20px 0px"}} value={password}  onChange={(e)=>{
     setpassword(e.target.value)
}}/>
<div className='passworderror' style={{color:"red"}}></div>
<div></div>

<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
LOGIN
</Button>
</form>
        </div>
);}
 
export default loginPage;
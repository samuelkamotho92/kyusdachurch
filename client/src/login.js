import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import Authnavbar from './component/authNav';
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

const SignupPage = () => {
    const classes = useStyles();
     const [email,setemail] = useState("");
        const [password,setpassword] = useState("");
        const handleSubmit = (e)=>{
            e.preventDefault();
            if(email && password){
                 console.log(email,password);
            }
                 }
    return (  
        <div className="loginpage">
        <Authnavbar />
<form autoComplete="off" className={classes.contactForm} onSubmit={handleSubmit}>
 <TextField type="text" className={classes.fieldValue} id="email" label="email" variant="outlined"
 required style={{margin:"20px 0px"}} value={email}  onChange={(e)=>{
     setemail(e.target.value)
}}/>
 <TextField type="password"  className={classes.fieldValue} id="password" label="password" variant="outlined"
 required style={{margin:"20px 0px"}} value={password}  onChange={(e)=>{
     setpassword(e.target.value)
}}/>
<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
Login
</Button>
</form>
        </div>
);}
 
export default SignupPage;
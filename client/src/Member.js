/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import AuthNavbar from "./components/authNav";
import { useState } from "react";
import React from "react";

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
 
const Memberregester = () => {
    let emailerror = document.querySelector(".emailerror");
    let  nameerror = document.querySelector(".nameerror");
    let regnoerror = document.querySelector(".regnoerror");
    let courseerror = document.querySelector(".courseerror");
    let yearerror = document.querySelector(".yearerror");
    console.log(emailerror,nameerror,regnoerror,courseerror,yearerror);
    const classes = useStyles();
    const [name,setname] =  useState("");
    const [email,setemail] = useState("");
    const [regno,setregno] = useState("");
    const [course,setcourse] = useState("");
    const [year,setyear] = useState("");
    const handleSubmit = async (e)=>{
e.preventDefault();
setname("");
setemail('');
setregno('');
setcourse('');
setyear('');
console.log(name,email,regno,course,year);
const response =
 await fetch(`http://localhost:5000/api/v1/member/register`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,email,regno,course,year}),
credentials: 'include',
withCredentials:true
});
  const data = await  response.json();
  console.log(data);
  if(data.newmember && response.status == 200){
    alert(`${data.newmember.email} Regesterd successfully `);
    location.assign("/");
  }
  if(data.errormess){
    emailerror.textContent = data.errormess.email;
    nameerror.textContent = data.errormess.name;
    regnoerror.textContent = data.errormess.regno;
yearerror.textContent = data.errormess.year
courseerror.textContent = data.errormess.course
}
    }
    return (  
    <div className="regesterMember">
        <AuthNavbar />
        <form autoComplete="off" className={classes.contactForm} onSubmit={handleSubmit}>
 <TextField type="text" className={classes.fieldValue} id="name" label="full name" variant="outlined"
 required style={{margin:"20px 0px"}} value={name}  onChange={(e)=>{
     setname(e.target.value)
}}/>
<div className='nameerror' style={{color:"red"}}></div>
 <TextField type="text"  className={classes.fieldValue} id="email" label="email" variant="outlined"
 required style={{margin:"20px 0px"}} value={email}  onChange={(e)=>{
     setemail(e.target.value)
}}/>
<div className='emailerror' style={{color:"red"}}></div>
<TextField type="text"  className={classes.fieldValue} id="regno" label="regno" variant="outlined"
 required style={{margin:"20px 0px"}} value={regno}  onChange={(e)=>{
     setregno(e.target.value)
}}/>
<div className='regnoerror' style={{color:"red"}}></div>
<TextField type="number"  className={classes.fieldValue} 
id="year" label="year of study" variant="outlined"
 required style={{margin:"20px 0px"}} value={year}  onChange={(e)=>{
     setyear(e.target.value)
}}/>
<div className='yearerror' style={{color:"red"}}></div>
<TextField type="text"  className={classes.fieldValue} id="course" label="course" variant="outlined"
 required style={{margin:"20px 0px"}} value={course}  onChange={(e)=>{
     setcourse(e.target.value)
}}/>
<div className='courseerror' style={{color:"red"}}></div>

<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
REGESTER MEMBER
</Button>
</form>  
    </div>
    );
}
 
export default Memberregester;
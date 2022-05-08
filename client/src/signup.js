/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import AuthNavbar from "./components/authNav";
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "pink",
    },
  },
  fieldValue: {
    width: "50%",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));



const SignupPage = () => {
  let nameerror = document.querySelector(".nameerror");
let emailerror = document.querySelector(".emailerror");
let passworderror = document.querySelector(".passworderror");
let passconferror = document.querySelector(".passconferror");

  const classes = useStyles();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordconfirm, setpasswordconfirm] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setname("");
    setemail("");
    setpassword("");
    setpasswordconfirm("");
    nameerror.textContent = "";
    emailerror.textContent = "";
    passworderror.textContent = "";
    passconferror.textContent = "";
 const resp = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, passwordconfirm }),
      credentials: 'include',
      withCredentials:true
    });
    console.log(resp.status);
    const data = await resp.json();
    if (data.newmember && resp.status == 200) {
      alert(`${data.newmember.email} Signed up successfully`);
      location.assign("/Post");
    }
    if (data.errormess) {
      nameerror.textContent = data.errormess.name;
      emailerror.textContent = data.errormess.email;
      passworderror.textContent = data.errormess.password;
      passconferror.textContent = data.errormess.passwordconfirm;
    }
  };
  return (
    <div className="signUp">
      <AuthNavbar />
      <form
        autoComplete="off"
        className={classes.contactForm}
        onSubmit={handleSubmit}  
      >
        <TextField
          type="text"
          className={classes.fieldValue}
          id="name"
          label="Full Names"
          variant="outlined"
          required
          style={{ margin: "20px 0px" }}
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <div className="nameerror" style={{color:"red"}}></div>
        <TextField
          type="text"
          className={classes.fieldValue}
          id="email"
          label="email"
          variant="outlined"
          required
          style={{ margin: "20px 0px" }}
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <div className="emailerror" style={{color:"red"}}></div>
        <TextField
          type="password"
          className={classes.fieldValue}
          id="password"
          label="password"
          variant="outlined"
          required
          style={{ margin: "20px 0px" }}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <div className="passworderror" style={{color:"red"}}></div>
        <TextField
          type="password"
          className={classes.fieldValue}
          id="passwordConfirm"
          label="passwordConfirm"
          variant="outlined"
          required
          style={{ margin: "20px 0px" }}
          value={passwordconfirm}
          onChange={(e) => {
            setpasswordconfirm(e.target.value);
          }}
        />
        <div className="passconferror" style={{color:"red"}}></div>
        <Button
          style={{ margin: "10px 0px" }}
          type="submit"
          variant="outlined"
          size="large"
          className={classes.btn}
        >
          SIGNUP
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;

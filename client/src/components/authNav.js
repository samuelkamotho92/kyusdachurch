import { Link } from "react-router-dom";
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
      display: "flex",
 justifyContent: "space-between",
 padding: "5px",
 backgroundColor: "crimson",
    },
    navlinks: {
  display:"flex",
  justifyContent:"space-between",
  fontSize: "18px",
  textDecoration: "none",
    },
   logo: {
position:"absolute",
top:"0px",
left:"0px"
    },
    link: {
      textDecoration: "none",
      color: "white",
     margin:"0px 10px",
      fontSize: "20px",
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));
const Authnavbar = () => {
const classes = useStyles();
 
    return ( 
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.root}>
         <Link to="/">
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      KYUSDA
          </IconButton>
         </Link>
     
          <div className={classes.navlinks} >
        <Link to="/login" color="inherit" className={classes.link}>Login</Link>
        <Link to="/Signup" color="inherit" className={classes.link}>Sign Up</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default Authnavbar;
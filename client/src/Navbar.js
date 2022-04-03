import { Link } from "react-router-dom";
import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import ContactsIcon from '@material-ui/icons/Contacts';
// import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
      display: "flex",
 justifyContent: "space-between",
 padding: "5px",
 backgroundColor: "rgba(102, 255, 0, 0.986)"
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
const Navbar = () => {
const classes = useStyles();
 
    return ( 
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className={classes.root}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      KYUSDA
          </IconButton>
          <div className={classes.navlinks} >
          <Link to="/" color="inherit" className={classes.link}>Home</Link>
          <Link to="/about" color="inherit"  className={classes.link}>About</Link>
          <Link to="/Contact" color="inherit"  className={classes.link}>Contact Us</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default Navbar;
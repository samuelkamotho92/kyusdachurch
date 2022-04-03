import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  footerpage: {
    backgroundColor: "rgba(102, 255, 0, 0.986)",
    color: "theme.palette.text.primary",
    marginTop: "30px",
    width: "100%",
  },
  links:{
      textDecoration:"none",
     listStyle:"none",
     display:"flex",
     flexDirection:"column",
     "& > a":{
         marginTop:"10px",
         textDecoration:"none",
         fontSize:"16px",
         "&:hover":{
                color:"wheat",
         }
     }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerpage}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ul className={classes.links}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"./signup"}>Sign Up</Link>
          </ul>
        </Grid>
        <Grid item xs={12} md={4}>
          <h5>KIRINYAGA UNIVERSITY SEVENTH DAY ADVENTIST CHURCH</h5>
          <h6>P.O.BOX 143 KERUGOYA</h6>
          <p>Phone: +254-713283743</p>
          <p>Email: kyusda@gmail.com</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h5>CONNECT</h5>
          <div class="social-icons">
            <a href="https://www.facebook.com/kirinyagasdachurch.kyusda">
              <img src="images/fb-icon.png" alt="social" />
            </a>
            <a href="https://twitter.com/KirinyagaC">
              <img src="images/tw-icon.png" alt="social" />
            </a>
            <a href="https://www.linkedin.com/in/kirinyagasda-church-8863b9218/">
              <img src="images/in-icon.png" alt="social" />
            </a>
            <a href="https://chat.whatsapp.com/B67OmBKpe11CS4UJrUnlkp">
              <img
                src="images/whatsappicon.jpg"
                alt="social"
                style={{height:"30px",width:"40px"}}/>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

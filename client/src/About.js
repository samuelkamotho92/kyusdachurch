import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import image1 from "./assets/missionvision.jpg";
import image2 from "./assets/ourvision.jpg";
import Leader from "./components/leaders";


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "40px",
    marginTop: "10px",
    marginBottom: "10px",
    "& span": {
      color: "#00ff00",
    },
  },
  cardboundry: {
    marginBottom: "20px",
    marginTop: "20px",
  },
  mediapic: {
    height: "200px",
  },
  item: {
    maxWidth: "200px",
  },
  elder: {
    height: "250px",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className="homepage">
        <Navbar />
        <div className="mainpage">
          <div className="aboutpage">
            <div className={classes.title}>
              <p>
                {" "}
                WELCOME TO
                <span> KYUSDA</span> CHURCH
              </p>
            </div>
            <h5
              class="about-text"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              We always love to share the word of God and experience a quality
              time in Jesus feet. Our Services are well organised with fruitful
              messages and encouraging words to Strengthen and Teach feel Much
              welcome,we cant wait to see you and worship together.
            </h5>
          </div>
          <Grid container spacing={2} className={classes.cardboundry}>
            <Grid item md={6} xs={12}>
              <Card>
                <CardMedia
                  image={image1}
                  alt="mission"
                  className={classes.mediapic}
                  style={{height:"50px"}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Church Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Make disciples of Jesus Christ who live as His loving
                    witnesses and proclaim to all people the everlasting gospel
                    of the Three Angels’ Messages in preparation for His soon
                    return
                    <p>(Matt 28:18-20, Acts 1:8, Rev 14:6-12).</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <Card>
                <CardMedia
                  image={image2}
                  alt="mission"
                  className={classes.mediapic}
                  style={{height:"50px"}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Church Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Make disciples of Jesus Christ who live as His loving
                    witnesses and proclaim to all people the everlasting gospel
                    of the Three Angels’ Messages in preparation for His soon
                    return
                    <p>(Matt 28:18-20, Acts 1:8, Rev 14:6-12).</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
<Leader /> 
        </div>
      </div>
      <Footer style={{ position: "absolute", bottom: "0", width: "100%" }} />
    </>
  );
};

export default About;

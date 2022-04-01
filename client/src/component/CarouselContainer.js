import React from 'react';
import "../App.css";
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  btn:{
    padding:"10px",
    fontSize:"20px",
    textDecoration:"none",
    letterSpacing:"1px",
    textTransform:"uppercase",
    backgroundColor:"violet",
    '&:hover':{
         backgroundColor:'orange'
    }
}
})

const CarouselContainer = () => {
  const classes = useStyles();
  return (
  
<Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="flexslider-caption">
      <h3>EXPERIENCE GOD'S</h3>
<h1>UNCEASING PROVISION</h1>
<p>
  <Link className={classes.btn}
   to={"/"} role="button" >JOIN US &rarr;</Link></p>
      </div>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className="flexslider-caption">
      <h2>True Worship Experience</h2>
<p className="lead">But the hour is coming,and now is here,when the true worshipers wil
  worship the Father in spirit and truth;for the father is seeking such to worship him.. <em>John 4:23</em></p>
  <p><Link className={classes.btn} to={"/about"}
 role="button">Learn more &rarr;</Link></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
   <div className="flexslider-caption">
   <h2>Grace and Truth</h2>
<p className="lead">For God did not send his Son into the world to condemn
 the world, but to save the world through him. <em>John 3:17</em></p>
<p><Link className={classes.btn} to={"/"}
 role="button">Browse gallery &rarr;</Link></p>
   </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}

export default CarouselContainer;
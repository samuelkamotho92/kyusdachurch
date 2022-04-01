import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
// import CarouselContainer from './CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
const About = () => {
    return ( 
        <div className="aboutpage">
   <Navbar />
        <div className="mainpage">
<h2>About Us</h2>
<Typography variant='h1' component="p" color="secondary">

</Typography>
{/* <CarouselContainer/> */}
        </div>
        <Footer />
        </div>
     
     );
}

export default About
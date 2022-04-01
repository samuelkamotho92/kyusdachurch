import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CarouselContainer from "./component/CarouselContainer";
// import Button from '@mui/material/Button';
import Upcoming from "./component/Upcoming";
const Home = () => {
    return ( 
        <div className="homepage">
   <Navbar />
   <div className="mainpage">
   <CarouselContainer />
   <Upcoming />
   </div>
        {/* <Footer /> */}
        </div>
     
     );
}
 
export default Home;
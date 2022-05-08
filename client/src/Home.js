import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CarouselContainer from "./components/CarouselContainer";
import  Dailydevotion from "./components/Devotion";
import Upcoming from "./components/Upcoming";
const Home = () => {
    return ( 
        <div className="homepage">
   <Navbar />
   <div className="mainpage">
   <CarouselContainer />
   <Upcoming />
   <Dailydevotion />
   <Footer />
   </div>
        {/* <Footer /> */}
        </div>
     );
}
 
export default Home;
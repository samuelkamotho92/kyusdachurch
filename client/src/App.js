import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contactus from './Contact';

function App() {
  return (
    <div className="App">
     <div className="content">
       <Router>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus/>} />
       </Routes>
       </Router>
     </div>
    </div>
  );
}

export default App;

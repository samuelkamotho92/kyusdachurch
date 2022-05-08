import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contactus from './Contact';
import Login from "./login";
import Signup from "./signup";
import Post from "./components/Posts/postfront";
import Regester from './Member';
function App() {
  return (
    <div className="App">
     <div className="content">
       <Router>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/newmember" element={<Regester />}/>
       </Routes>
       </Router>
     </div>
    </div>
  );
}

export default App;

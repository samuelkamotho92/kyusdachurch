import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="content">
       <h2>My Content</h2>
     </div>
     <Footer />
    </div>
  );
}

export default App;

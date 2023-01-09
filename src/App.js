import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prod from './component/Navbar_pages/Prod';
import Quartz from './component/Navbar_pages/Quartz';
import Manufacturing from './component/Navbar_pages/Manufacturing';
import Mining from './component/Navbar_pages/Mining';
import Contact from './component/Navbar_pages/Contact';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    
    <div className="App">
      <Header/>
      <Navbar/>
      
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Prod/>}/>
      <Route path="/quartz" element={<Quartz/>}/>
      <Route path="/manufacturing" element={<Manufacturing/>}/>
      <Route path="/mining" element={<Mining/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

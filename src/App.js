import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} ></Route>
      <Route path="/contact" element = {<Contact />} ></Route>
      <Route path="/about" element = {<About />} ></Route>
    </Routes>
   </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Navbar from "./components/index.js";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Arts from "./components/Arts";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<About />} />
        <Route path='/about' element={<About/>} />
        <Route path='/webprojects' element={<Projects/>} />
        <Route path='/artprojects' element={<Arts/>} />
    </Routes>    
    <Footer />
    </Router>
  );
}

export default App;
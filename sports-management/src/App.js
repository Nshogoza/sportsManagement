import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Features from './Components/Features';
import Contact from './Components/Contact';
import About from './Components/About'
import Footer from './Components/Footer';
import Home from './Components/Home';
import Join from './Components/Join';
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/' element={<Home />} />
      <Route path='/Join' element={<Join />} />
      <Route path='/login' element={<Login/>}/>
        </Routes>
       <Contact/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

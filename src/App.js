import React, { useState, useEffect } from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import handleSubmit from './handles/handlesubmit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

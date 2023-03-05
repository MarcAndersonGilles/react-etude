import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import Difficulte from './components/Difficulte';
import Apprentissage from './components/Apprentissage';
import Conclusion from './components/Conclusion';
import Intro from './components/Intro';
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//import handleSubmit from './handles/handlesubmit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="/react-etude/" element={<Intro />} />
            <Route path="/apprentissages" element={<Apprentissage />} />
            <Route path="/difficulte" element={<Difficulte />} />
            <Route path="/app" element={<Home />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

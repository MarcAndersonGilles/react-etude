import React from 'react';
import './App.css';

import Todo from './components/Todo';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";


//import firebase from "./firebase_setup/firebase";
import handleSubmit from './handles/handlesubmit';
// import { useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    fetch("http://localhost:9000/testAPI")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch API");
        }
        return res.text();
      })
      .then(res => this.setState({ apiResponse: res }))
      .catch(error => console.error(error));
  }

  
  

  render() {
    
    return (
      
      <Router>
        <div className="App">
          <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}  />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
          
          <div>
          <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

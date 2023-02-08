import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import firebase from "./firebase_setup/firebase";
import handleSubmit from './handles/handlesubmit';
// import { useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


firebase.initializeApp({
  /// your config
  apiKey: "AIzaSyAHRJL9gGwVC2oGZkQ2m_hr47buo4ckcLQ",
  authDomain: "react-etude-51ccd.firebaseapp.com",
  databaseURL: "https://react-etude-51ccd-default-rtdb.firebaseio.com",
  projectId: "react-etude-51ccd",
  storageBucket: "react-etude-51ccd.appspot.com",
  messagingSenderId: "230918704411",
  appId: "1:230918704411:web:ddfaf8d6ff04e4f9fa97be",
  measurementId: "G-E2PL6YNJJG"
});

const auth = firebase.auth();
const firestore = firebase.firestore;

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
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

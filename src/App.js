import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHRJL9gGwVC2oGZkQ2m_hr47buo4ckcLQ",
  authDomain: "react-etude-51ccd.firebaseapp.com",
  projectId: "react-etude-51ccd",
  storageBucket: "react-etude-51ccd.appspot.com",
  messagingSenderId: "230918704411",
  appId: "1:230918704411:web:ddfaf8d6ff04e4f9fa97be",
  measurementId: "G-E2PL6YNJJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
          
          
        </div>
      </Router>
    );
  }
}

export default App;

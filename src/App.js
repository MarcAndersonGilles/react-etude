import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
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

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
//import APIHandler from './components/ApiHandler';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



//DE LA VIDEO DE SIMPLILEARN CONNECT JS WITH NODE JS
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={apiResponse:""};
  }
  //DE LA VIDEO DE SIMPLILEARN CONNECT JS WITH NODE JS
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))
  }

  componentWillMount(){
    this.callAPI();
  }

render() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      <h1>Mon premier projet avec React</h1>
      <p>{this.state.apiResponse}</p>
    </div>
    </Router>
  );
}
}

export default App;

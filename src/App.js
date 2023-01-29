import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';



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
    <div className="App">
      <Navbar />
      <h1>Mon premier projet avec React</h1>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}
}

export default App;

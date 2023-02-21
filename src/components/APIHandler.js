import React from 'react';
//DE LA VIDEO DE SIMPLILEARN CONNECT JS WITH NODE JS
class APIHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return this.props.children(this.state.apiResponse);
  }
}

export default APIHandler;

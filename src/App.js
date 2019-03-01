import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banba from './components/Banba';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container master" id="masterContainer">
          <Banba />
        </div>
      </Router>
    );
  }
}

export default App;

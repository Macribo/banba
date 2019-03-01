import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Sitenav from './components/pageComponents/Sitenav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sitenav />
          <Projects />
        </div>
      </Router>
    );
  }
}

export default App;

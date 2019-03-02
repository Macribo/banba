import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Likeus from './components/Likeus';
import Gallery from './components/Gallery';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import E from './components/E';
import Notfound from './components/Notfound';
import Sitenav from './components/pageComponents/Sitenav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sitenav />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/likeus" component={Likeus} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/a" component={A} />
            <Route exact path="/b" component={B} />
            <Route exact path="/c" component={C} />
            <Route exact path="/d" component={D} />
            <Route exact path="/e" component={E} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.sass';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employees from './pages/Employees/Employees';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="APP-container">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/employees/" component={Employees} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import './App.css';

import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

import LoginFail from './components/pages/LoginFail';
import SignUpFail from './components/pages/SignUpFail';

function App() {
  return (
    <Provider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={SignUpForm} />
              <Route exact path="/sign-in" component={SignInForm} />
              <Route exact path="/login-fail" component={LoginFail} />
              <Route exact path="/signup-fail" component={SignUpFail} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;

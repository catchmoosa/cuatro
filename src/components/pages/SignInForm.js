import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Consumer } from '../../context';
import uuid from 'uuid';
// import { config } from '../../config';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(dispatch, e) {
    console.log('Submitted')
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign In
                </NavLink>{' '}
                or{' '}
                <NavLink
                  exact
                  to="/"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>
              <div className="FormCenter">
                <form
                  className="FormFields"
                  onSubmit={this.handleSubmit.bind(this, dispatch)}
                >
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">
                      E-Mail/UserName
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="FormField__Input text-dark"
                      placeholder="Enter your email/user-name"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="FormField__Input text-dark"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign In</button>{' '}
                    <Link to="/" className="FormField__Link">
                      Create an account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SignInForm;

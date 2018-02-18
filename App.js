/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './Login';
import Secured from './Secured'

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoggedIn: false
  };
  render() {
      if (this.state.isLoggedIn)
        return <Secured
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
      else
        return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }
}
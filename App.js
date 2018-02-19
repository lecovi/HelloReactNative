/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Login from './Login';
import Secured from './Secured'
import Register from './Register'

class HomeScreen extends Component<Props> {
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

const RootStack = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Secured: {
    screen: Secured,
  },
},
{
  initialRouteName: 'Login',
  headerMode: 'screen',
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
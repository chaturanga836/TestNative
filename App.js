/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './Login/Login';
import Customer from './CustomerDetail/Customer';

import { createAppContainer,createStackNavigator} from "react-navigation";

const AppNavigator = createStackNavigator({
  Login:{
    screen: Login
  },

  Customer: {
    screen: Customer
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{

  
  render() {
    return (
      <React.Fragment>
        <AppContainer />
      </React.Fragment>
      
    );
  }
}



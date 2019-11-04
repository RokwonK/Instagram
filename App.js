import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Components/MainScreen';
import HomeTap from './Components/AppTabNavigator/HomeTap';

const AppStackNavigator = createStackNavigator({
  Main: { screen: MainScreen },
  HomeTap: { screen: HomeTap }
},
{
  initialRouteName: 'Main'
}
);

export default createAppContainer(AppStackNavigator);
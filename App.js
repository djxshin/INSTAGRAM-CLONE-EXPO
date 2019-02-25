 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import feed from './app/screens/feed';
import upload from './app/screens/upload';
import profile from './app/screens/profile';

const MainStack = createBottomTabNavigator(
  {
    Feed: {screen: feed },
    Upload: {screen: upload },
    Profile: {screen: profile }
  }
)


export default class App extends React.Component {
  
  render() {
    return (
    <MainStack/>
    );
  }
}



import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import HomeScreen from './src/components/home-screen';
import { styles } from './styles/index';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }

}

AppRegistry.registerComponent('cgpa-calculator', () => App);

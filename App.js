import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { styles } from './styles'
import AppNavigator from './app-nav';

export default class App extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <AppNavigator ref={nav => {this.navigator = nav;}} />
      </View>
    );
  }

}


AppRegistry.registerComponent('CGPA Calculator', () => App);

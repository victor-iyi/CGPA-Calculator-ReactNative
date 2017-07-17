import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import AppNavigator from './app-nav'
import { styles } from './styles/index'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator ref={nav => { this.navigator = nav; }} />
      </View>
    )
  }

}

AppRegistry.registerComponent('CGPA Caalculator', () => App)

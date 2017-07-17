import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import AppNavigator from './app-nav'
import { styles } from './styles'

export default class App extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <AppNavigator ref={nav => { this.navigator = nav; }} />
      </View>
    )
  }

}

AppRegistry.registerComponent('CGPA Caalculator', () => App)

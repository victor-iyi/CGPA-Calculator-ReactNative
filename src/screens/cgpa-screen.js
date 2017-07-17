import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles'

export default class CGPAScreen extends Component {

  static navigationOPtions = {
    title: 'Caalculate CGPA',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from the CGPA screen</Text>
      </View>
    )
  }

}

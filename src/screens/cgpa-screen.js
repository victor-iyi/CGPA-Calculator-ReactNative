import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles'

export default class CGPAScreen extends Component {

  static navigationOptions = {
    title: 'Calculate CGPA',
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text> CalcCGPA screen {params.semesters} </Text>
      </View>
    )
  }

}

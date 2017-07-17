import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import ButtonRow from './button-row'
import { styles } from '../../styles/index'

export default class HomeScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.heading}>CGPA Calculator</Text>
        <Text style={styles.input}>0</Text>
        <Text>Enter number of semesters & press go!</Text>
        <ButtonRow buttons={ ['7', '8', '9'] } />
        <ButtonRow buttons={ ['4', '5', '6'] } />
        <ButtonRow buttons={ ['1', '2', '3'] } />
        <ButtonRow buttons={ ['<=', '0', '=>'] } />
      </View>
    )
  }

}

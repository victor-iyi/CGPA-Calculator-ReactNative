import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles'
import ButtonRow from '../components/button-row'

export default class HomeScreen extends Component {

  constructor(props){
  	super(props)
  	this.state = { result: '0' }
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>CGPA Calculator</Text>
        <Text style={styles.input}>{this.state.result}</Text>
        <Text>Provide the number of semesters and hit Go!</Text>
        <ButtonRow buttons={[7, 8, 9]} />
        <ButtonRow buttons={[4, 5, 6]} />
        <ButtonRow buttons={[1, 2, 3]} />
        <ButtonRow buttons={['<=', 0, '=>']} />
      </View>
    )
  }

}

import React, { Component } from 'react'
import { View, Alert, Text, Button } from 'react-native'
import ButtonRow from './button-row'
import { styles } from '../../styles/index'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)

    this.state = { result: '0' }
    // bindings
    this._numButton = this._numButton.bind(this)
    this._controlButton = this._controlButton.bind(this)
  }

  clearResult() {
    if ( this.state.result > 1 ) {
      if ( this.state.result.length === 1 )
        this.setState( { result: '0' })
      else
        this.setState(prevState => {
          return { result: prevState.result.slice(0, -1) }
        })
    } else
        this.setState({ result: '0' })
  }

  _numButton(title) {
    this.setState((prevState) => {
      return { result: prevState.result === '0' ? `${title}` : `${prevState.result}${title}`}
    })
  }

  _controlButton(title) {
    this.clearResult()
  }

  render() {
    return (
      <View>
        <Text style={styles.heading}>CGPA Calculator</Text>
        <Text style={styles.input}>{this.state.result}</Text>
        <Text>Enter number of semesters & press go!</Text>
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [7, 8, 9] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [4, 5, 6] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [1, 2, 3] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ ['<=', 0, '=>'] } />
      </View>
    )
  }

}

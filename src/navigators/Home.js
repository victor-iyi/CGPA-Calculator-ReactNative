import React, { Component } from 'react';
import { View, Alert, Text, Button } from 'react-native';
import { ButtonRow } from '../components';
import { styles } from '../styles';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = { result: '0' };
    // bindings
    this._numButton = this._numButton.bind(this);
    this._controlButton = this._controlButton.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  }

  clearResult() {
    if ( this.state.result > 1 ) {
      if ( this.state.result.length === 1 )
        this.setState( { result: '0' });
      else
        this.setState(prevState => {
          return { result: prevState.result.slice(0, -1) }
        });
    } else
        this.setState({ result: '0' });
  }

  _numButton(title) {
    if ( this.state.result.length < 3 )
      this.setState((prevState) => {
        return { result: prevState.result === '0' ? `${title}` : `${prevState.result}${title}`};
      });
  }

  _controlButton(title) {
    if ( title === '<=' )
      this.clearResult();
    else {
      const result = parseInt(this.state.result)
      if ( result > 0 && result <= 12 ) {
        const { navigate } = this.props.navigation;
        navigate('CGPA', { semesters: result });
      } else {
        Alert.alert('Number of semesters out of range.\nMin is 1 & Max is 12')
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>CGPA Calculator</Text>
        <Text style={styles.input}>{this.state.result}</Text>
        <Text>Enter number of semesters & press go!</Text>
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [7, 8, 9] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [4, 5, 6] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ [1, 2, 3] } />
        <ButtonRow cButton={this._controlButton} nButton={this._numButton} buttons={ ['<=', 0, '=>'] } />
      </View>
    );
  }

}

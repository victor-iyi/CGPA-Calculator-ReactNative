import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';
import { NumberButtons } from '../components';
import { styles } from '../styles';

class CGPAPrompt extends Component {

  constructor(props) {
    super(props);

    this.state = { result: '0' };
    // bindings
    this._numButton = this._numButton.bind(this);
    this._controlButton = this._controlButton.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'CGPA',
  });

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

  _controlButton(action) {
    if ( action === 'clear' )
      this.clearResult();
    else {
      const result = parseInt(this.state.result)
      if ( result > 0 && result <= 12 ) {
        const { navigate } = this.props.navigation;
        navigate('CalculateCGPA', { sessions: result });
      } else
        Alert.alert('Number of semesters out of range.\nMin is 1 & Max is 12')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NumberButtons 
          result={this.state.result}
          prompt="Enter number of sessions completed & press go!"
          controlButton={this._controlButton}
          numButton={this._numButton} />
      </View>
    );
  }

}

export default CGPAPrompt;